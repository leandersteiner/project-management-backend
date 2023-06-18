import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  public description: string;

  @IsBoolean()
  public done: boolean;

  @IsNumber()
  @IsPositive()
  public position: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  public priority: number;

  @IsUUID()
  @IsOptional()
  public taskStateId: string;

  @IsUUID()
  @IsOptional()
  public assigneeId: string;

  @IsUUID()
  public projectId: string;

  @IsUUID()
  @IsOptional()
  public sprintId: string;
}
