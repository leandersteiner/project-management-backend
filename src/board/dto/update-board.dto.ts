import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateBoardDto {
  @IsString()
  @IsNotEmpty()
  public title: string;
}
