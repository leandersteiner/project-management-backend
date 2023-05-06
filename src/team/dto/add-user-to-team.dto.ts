import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AddUserToTeamDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  public userId: string;
}
