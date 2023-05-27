import { IsBoolean, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  public name: string;

  @IsBoolean()
  public done: boolean;
}
