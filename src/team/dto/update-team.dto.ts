import { IsBoolean, IsString } from 'class-validator';

export class UpdateTeamDto {
  @IsString()
  public name: string;

  @IsBoolean()
  public private: boolean;
}
