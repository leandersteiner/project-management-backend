import { Document } from 'mongoose';
import { BoardColumn } from 'src/board-column/board-column.interface';
import { Project } from 'src/project/project.interface';
import { TaskState } from 'src/task-state/task-state.schema';

export interface Board extends Document {
  readonly state: TaskState;
  readonly project: Project;
  readonly columns: BoardColumn[];
}
