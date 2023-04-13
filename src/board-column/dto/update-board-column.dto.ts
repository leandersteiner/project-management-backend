import { Task } from 'src/task/task.schema';

export interface UpdateBoardColumnDto {
  readonly name: string;
  readonly tasks: Task[];
}
