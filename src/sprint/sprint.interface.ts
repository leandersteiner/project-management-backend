import { Document } from 'mongoose';
import { Project } from 'src/project/project.interface';
import { Task } from 'src/task/task.interface';

export interface Sprint extends Document {
  readonly name: String,
  readonly project: Project,
  readonly tasks: Task[]
}