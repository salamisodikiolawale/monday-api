import { Injectable } from '@nestjs/common';
import { User } from './users.interfaces';

//use model typeOprm or mongoose

@Injectable()
export class UsersService {

    private readonly users: User[] = [
       
        {
            userId: 2,
            name: "Salami",
            username:'salami',
            password:'salami',
            phone:"0758954217",
            skype:"salamisodikiolawale@gmail.com",
            lieu:"Evry",
            fuseau:"GMT 12:PM",
            anniversaire:"23-12-1995",
        }
    ];

    async findOne(username: string): Promise<User | undefined>{
        return this.users.find(user => user.username === username)
    }
}
