import { IsString, IsUUID } from 'class-validator';

export class UpdateBoardColumnDto {
  @IsString()
  public title: string;

  @IsUUID()
  public taskStateId: string;
}
