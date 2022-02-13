import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity'

@Injectable()
export class UsersService {



    // private readonly users: User[] = [
       
    //     {
    //         userId: 2,
    //         email:'salamisodikiolawale@gmail.com',
    //         password:'salami',
    //         username:'salami',
    //         name: "Salami",
    //         phone:"0758954217",
    //         skype:"salamisodikiolawale@gmail.com",
    //         lieu:"Evry",
    //         fuseau:"GMT 12:PM",
    //         anniversaire:"23-12-1995",
    //     }
    // ];


    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}

    async findOne(email: string): Promise<User>{
        // return this.users.find(user => user.email === email)
        return this.usersRepository.findOne(1) //il faut gerer le passage de l'email pour recupere
    }
}
