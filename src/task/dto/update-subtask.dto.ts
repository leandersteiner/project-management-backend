import { IsBoolean, IsString } from 'class-validator';

export class UpdateSubtaskDto {
  @IsString()
  public name: string;

  @IsBoolean()
  public done: boolean;
}
