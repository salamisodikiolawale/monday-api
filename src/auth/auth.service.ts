import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

//Use bcrypt

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService){}

    async validation(username: string, pass:string): Promise<any>{
        const user = await this.userService.findOne(username);
        if(user && user.password == pass){
            const {password, ...result} = user;
            return result;
        }
        return null
    }
}
