import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID
} from 'class-validator';

export class CreateBoardColumnDto {
  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsUUID()
  @IsNotEmpty()
  public taskStateId: string;

  @IsNumber()
  @IsPositive()
  public position: number;
}
