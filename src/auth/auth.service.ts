import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(username: string, password: string): Promise<{ token: string }> {
    const user = await this.userService.findByUsername(username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException();
    }

    const payload = { id: user.id, username: user.username, sub: user.id };

    return {
      token: await this.jwtService.signAsync(payload)
    };
  }

  async signUp(username: string, password: string): Promise<{ token: string }> {
    const user = await this.userService.create({
      username: username,
      password: password
    });

    const payload = { id: user.id, username: user.username, sub: user.id };

    return {
      token: await this.jwtService.signAsync(payload)
    };
  }
}
