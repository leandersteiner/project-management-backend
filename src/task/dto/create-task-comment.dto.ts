import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskCommentDto {
  @IsString()
  @IsNotEmpty()
  public comment: string;
}
