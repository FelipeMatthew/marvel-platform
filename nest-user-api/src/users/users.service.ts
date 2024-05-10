import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private userRepo: Repository<User>
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = this.userRepo.create(createUserDto);

    return this.userRepo.save(user)
  }

  findAll() {
    return this.userRepo.find();
  }


  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
