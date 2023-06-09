import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  @IsStrongPassword()
  public password: string;
}
