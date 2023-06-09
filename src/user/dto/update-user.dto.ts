import { IsEmail, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
