import { Body, Controller, Get, Post, Req, Request } from '@nestjs/common';
import { request } from 'https';
import { UsersService } from 'src/shares/services/users.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UsersController {

    constructor(
        private readonly userService:UsersService
    ){}
    

    @Get('/findOne')
    public findOne(@Request() req): Promise<User>{

        const {email} = req.query;
        
        return this.userService.findOne(email);
    }
}
