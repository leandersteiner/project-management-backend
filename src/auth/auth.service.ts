import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginUserDto } from '../user/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(
    loginUserDto: LoginUserDto
  ): Promise<{ token: string; user: User }> {
    const user = await this.userService.findByUsername(loginUserDto.username);

    if (
      !user ||
      !(await bcrypt.compare(loginUserDto.password, user.password))
    ) {
      throw new UnauthorizedException();
    }

    const payload = { id: user.id, username: user.username, sub: user.id };

    return {
      token: await this.jwtService.signAsync(payload),
      user
    };
  }

  async signUp(
    createUserDto: CreateUserDto
  ): Promise<{ token: string; user: User }> {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    await this.userService.create(createUserDto);
    const user = await this.userService.findByUsername(createUserDto.username);

    const payload = { id: user.id, username: user.username, sub: user.id };

    return {
      token: await this.jwtService.signAsync(payload),
      user
    };
  }
}
