import { IsDate, IsString } from 'class-validator';

export class UpdateSprintDto {
  @IsString()
  public name: string;

  @IsDate()
  public start: Date;

  @IsDate()
  public end: Date;
}
