import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateSprintDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsDate()
  @IsNotEmpty()
  public start: Date;

  @IsDate()
  @IsNotEmpty()
  public end: Date;
}
