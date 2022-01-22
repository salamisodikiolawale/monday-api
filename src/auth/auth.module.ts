import { Module } from '@nestjs/common';

//Modules
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

//Constants
import { jwtConstants } from './constants';

//Services
import { AuthService } from './auth.service';

//Strategy
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports:[
    UsersModule, 
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '360s'},
    })
  ],
  exports: [AuthService]
})
export class AuthModule {}
