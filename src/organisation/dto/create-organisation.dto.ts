import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateOrganisationDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsBoolean()
  public private: boolean;
}
