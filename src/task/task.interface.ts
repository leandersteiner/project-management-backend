import { Document } from 'mongoose';
import { BoardColumn } from 'src/board-column/board-column.interface';
import { Sprint } from 'src/sprint/sprint.interface';
import { TaskState } from 'src/task-state/task-state.schema';

export interface Task extends Document {
  readonly name: string;
  readonly state: TaskState;
  readonly column: BoardColumn;
  readonly done: boolean;
  readonly sprint: Sprint;
}
