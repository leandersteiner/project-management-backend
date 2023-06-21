import { IsNotEmpty, IsString } from 'class-validator';

export class AddUserToOrganisationDto {
  @IsString()
  @IsNotEmpty()
  public userId: string;
}
