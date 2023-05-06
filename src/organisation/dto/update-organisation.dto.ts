import { IsBoolean, IsString } from 'class-validator';

export class UpdateOrganisationDto {
  @IsString()
  public name: string;

  @IsBoolean()
  public private: boolean;
}
