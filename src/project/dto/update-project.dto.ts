import { IsBoolean, IsString } from 'class-validator';

export class UpdateProjectDto {
  @IsString()
  public name: string;

  @IsBoolean()
  public private: boolean;
}
