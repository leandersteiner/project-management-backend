import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>
  ) {}

  findByUsername = async (username: string): Promise<User> => {
    return this.repository.findOneBy({
      username: username
    });
  };

  findById = async (id: string): Promise<User> => {
    return this.repository.findOneBy({
      id: id
    });
  };

  create = async (createDto: CreateUserDto): Promise<User> => {
    return this.repository.save(createDto);
  };

  delete = async (id: string): Promise<void> => {
    await this.repository.delete({ id: id });
  };

  findMultiple = async (ids: string[]): Promise<User[]> => {
    return this.repository.findBy({ id: In(ids) });
  };
}
