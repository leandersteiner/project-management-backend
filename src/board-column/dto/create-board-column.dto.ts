import { Task } from 'src/task/task.schema';

export interface CreateBoardColumnDto {
  readonly name: string;
  readonly tasks: Task[];
}
