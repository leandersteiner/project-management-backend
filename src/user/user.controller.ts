import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:userId')
  async getById(@Param('userId') id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @Delete('/:userId')
  async delete(@Param('userId') id: string): Promise<User> {
    const user = this.userService.findById(id);
    await this.userService.delete(id);
    return user;
  }
}
