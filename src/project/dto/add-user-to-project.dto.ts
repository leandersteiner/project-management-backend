import { IsNotEmpty, IsUUID } from 'class-validator';

export class AddUserToProjectDto {
  @IsUUID()
  @IsNotEmpty()
  public userId: string;
}
