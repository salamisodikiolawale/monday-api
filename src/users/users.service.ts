import { Injectable } from '@nestjs/common';
import { User } from './users.interfaces';

//use model typeOprm or mongoose

@Injectable()
export class UsersService {

    private readonly users: User[] = [
        {
            userId: 1,
            username:'john',
            password:'changeme'
        },
        {
            userId: 2,
            username:'marria',
            password:'guess'
        }
    ];

    async findOne(username: string): Promise<User | undefined>{
        return this.users.find(user => user.username === username)
    }
}
