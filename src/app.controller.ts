import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';

//Services
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

//Guards
import { LocalAuthGuard } from './auth/guards/local-auth.guard'; 


@Controller()
export class AppController {
  constructor(
    // private readonly appService: AppService,
    private readonly authService: AuthService
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
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}