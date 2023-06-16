import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateBoardColumnDto {
  @IsString()
  @IsOptional()
  public title: string;

  @IsUUID()
  @IsOptional()
  public taskStateId: string;

  @IsNumber()
  @IsOptional()
  public position: number;
}
