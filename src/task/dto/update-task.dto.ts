import {
  IsBoolean,
  IsNumber,
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

  @IsUUID()
  public assigneeId: string;

  @IsUUID()
  public taskStateId: string;

  @IsUUID()
  public sprintId: string;
}
