import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common';

//Services
import { AppService } from './app.service';
import { AuthService } from './shares/services/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

//Guards
import { LocalAuthGuard } from './auth/guards/local-auth.guard'; 
import { UsersService } from './shares/services/users.service';


@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  // /**
  //  * With basic auth passport
  //  * @param req 
  //  * @returns 
  //  */
  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // async login(@Request() req){
  //   return  req.user; 
  // }


  // //Mon idee: utilisation de basic auth avec generation de token
  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }



  @UseGuards(LocalAuthGuard)
  @Post('auth/signin')
  async signin(@Request() req) {

    return await this.authService.login(req.body);

  }

  @Post('auth/signup')
  async signup(@Body() credential:{email:string, password:string}) {
    
    return await this.userService.create(credential);

  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}