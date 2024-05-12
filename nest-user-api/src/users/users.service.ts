import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private userRepo: Repository<User>
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = this.userRepo.create(createUserDto);

    return this.userRepo.save(user)
  }

  async findOneByEmailAndPassword(email: string, password: string) {
    const user = await this.userRepo.findOne({ where: { email, password } });

    if(!user) {
      console.log(error)
    }

    return user;
  }

  findAll() {
    return this.userRepo.find();
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
