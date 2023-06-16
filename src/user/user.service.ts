import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>
  ) {}

  findByUsername = async (username: string): Promise<User> => {
    return await this.repository.findOneBy({
      username: username
    });
  };

  findByEmail = async (user: User, email: string): Promise<User> => {
    const requestedUser = await this.repository.findOneBy({
      email: email
    });

    this.ensureAllowed(user.id, requestedUser.id);

    return requestedUser;
  };

  findById = async (id: string): Promise<User> => {
    return this.repository.findOneBy({
      id: id
    });
  };

  findAll = async (): Promise<Pick<User, 'id' | 'username' | 'email'>[]> => {
    return this.repository.find({
      select: { id: true, username: true, email: true }
    });
  };

  create = async (createDto: CreateUserDto): Promise<User> => {
    return this.repository.save(createDto);
  };

  update = async (
    user: User,
    userId: string,
    updateDto: UpdateUserDto
  ): Promise<User> => {
    this.ensureAllowed(user.id, userId);
    if (updateDto.password) {
      updateDto.password = await bcrypt.hash(updateDto.password, 10);
    }
    user = { ...user, ...updateDto };
    return this.repository.save(user);
  };

  delete = async (user: User, id: string): Promise<void> => {
    this.ensureAllowed(user.id, id);
    await this.repository.delete({ id: id });
  };

  findMultiple = async (ids: string[]): Promise<User[]> => {
    return this.repository.findBy({ id: In(ids) });
  };

  private ensureAllowed = (loggedInUserId, requestedId: string): void => {
    if (loggedInUserId !== requestedId) {
      throw new UnauthorizedException();
    }
  };
}
