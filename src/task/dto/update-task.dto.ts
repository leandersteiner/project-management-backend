import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID
} from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  public name: string;

  @IsString()
  public description: string;

  @IsBoolean()
  public done: boolean;

  @IsNumber()
  @IsPositive()
  public priority: number;

  @IsNumber()
  @IsPositive()
  public position: number;

  @IsUUID()
  @IsOptional()
  public assigneeId: string;

  @IsUUID()
  @IsOptional()
  public taskStateId: string;

  @IsUUID()
  @IsOptional()
  public sprintId: string;
}
