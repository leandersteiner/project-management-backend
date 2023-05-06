import { IsString, IsStrongPassword } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  public name: string;

  @IsString()
  @IsStrongPassword()
  public password: string;
}
