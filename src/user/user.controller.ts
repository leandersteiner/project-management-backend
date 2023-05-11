import {
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  UseInterceptors
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @HttpCode(HttpStatus.OK)
  @Get('/:userId')
  async getById(@Param('userId') id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @HttpCode(HttpStatus.OK)
  @Patch('/:userId')
  async update(@Param('userId') id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @HttpCode(HttpStatus.OK)
  @Delete('/:userId')
  async delete(@Param('userId') id: string): Promise<void> {
    return this.userService.delete(id);
  }
}
