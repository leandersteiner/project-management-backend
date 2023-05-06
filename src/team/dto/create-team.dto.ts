import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsBoolean()
  public private: boolean;
}
