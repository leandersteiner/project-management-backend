import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.all({});
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<User> {
    return this.userService.find({ id });
  }

  @Post()
  async create(
    @Body() postData: { username: string; password: string }
  ): Promise<User> {
    return this.userService.create({
      username: postData.username,
      password: postData.password
    });
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<User> {
    return this.userService.delete({ id });
  }
}
