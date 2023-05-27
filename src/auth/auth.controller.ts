import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseInterceptors
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginUserDto } from '../user/dto/login-user.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: LoginUserDto) {
    return this.authService.signIn(signInDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  signUp(@Body() signUpDto: CreateUserDto) {
    return this.authService.signUp(signUpDto);
  }
}
