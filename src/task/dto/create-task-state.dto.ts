import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskStateDto {
  @IsString()
  @IsNotEmpty()
  public name: string;
}
