import { Document } from 'mongoose';
import { Task } from 'src/task/task.interface';

export interface BoardColumn extends Document {
  readonly name: String,
  readonly tasks: Task[]
}