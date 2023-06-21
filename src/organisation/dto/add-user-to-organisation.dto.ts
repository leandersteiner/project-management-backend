import { IsNotEmpty, IsUUID } from 'class-validator';

export class AddUserToOrganisationDto {
  @IsUUID()
  @IsNotEmpty()
  public userId: string;
}
