import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTaskStateDto {
  @IsString()
  @IsNotEmpty()
  public name: string;
}
