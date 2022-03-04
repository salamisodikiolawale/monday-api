import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  email:string;

  @Column()
  password?: string;

  @Column()
  username?: string;

  @Column()
  name?:string;

  @Column()
  phone?:string;

  @Column()
  skype?:string;

  @Column()
  lieu?:string;

  @Column()
  fuseau?:string;
  
  @Column()
  anniversaire?:string
}