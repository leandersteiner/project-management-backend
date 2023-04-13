import { Document } from 'mongoose';
import { Task } from 'src/task/task.interface';

export interface BoardColumn extends Document {
  readonly name: string;
  readonly tasks: Task[];
}
