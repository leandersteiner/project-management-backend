import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
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
  public taskStateId: string;

  @IsUUID()
  public assigneeId: string;

  @IsUUID()
  public sprintId: string;
}
