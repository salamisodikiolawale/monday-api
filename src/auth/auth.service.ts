import { Injectable } from '@nestjs/common';

//Services
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

//NB : a mettre en place
    //Use bcrypt
    //Config service

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ){}

    async validation(email: string, pass:string): Promise<any>{
        console.log("auth.service line 22", email, pass)
        const user = await this.userService.findOne(email);
        console.log("auth.service line 22", user)
        if(user && user.password == pass){
            const {password, ...result} = user;
            return result;
        }
        return null
    }

    async login(user: any) {

        const payload = {email: user.email, userId: user.userId}
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
