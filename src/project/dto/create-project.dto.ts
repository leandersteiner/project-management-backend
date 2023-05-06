import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsBoolean()
  public private: boolean;
}
