import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateBoardColumnDto {
  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsUUID()
  @IsNotEmpty()
  public taskStateId: string;
}
