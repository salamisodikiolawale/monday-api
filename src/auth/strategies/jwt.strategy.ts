import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../constants';
import { UsersService } from 'src/shares/services/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(private readonly userService:UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    console.log("jwt.strategy",payload)
    //Nous pouvous effectuer des requete bd pour avoir plus infos dans l'objet user qui sera envoyer
    const user = this.userService.findOne(payload.email)
    
    const {password, ...result} = await user;
    // return { userId: payload.sub, email: payload.email };
    return result
  }
}