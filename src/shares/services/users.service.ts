import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import {User as UserInterface} from '../interfaces/users.interfaces';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}

    async findOne(email: string): Promise<User>{
       return await this.usersRepository.findOne({email: email});
    }

    async create(credentials:UserInterface){
        return await this.usersRepository.save(credentials);
    }   
}
