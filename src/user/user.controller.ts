import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.all({});
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<User> {
    return this.userService.find(id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<User> {
    return this.userService.delete(id);
  }
}
