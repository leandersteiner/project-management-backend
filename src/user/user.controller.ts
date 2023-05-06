import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @Post()
  async create(@Body() createDto: CreateUserDto): Promise<User> {
    return this.userService.create(createDto);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<User> {
    const user = this.userService.findById(id);
    await this.userService.delete(id);
    return user;
  }
}
