import { BoardColumn } from 'src/board-column/board-column.schema';
import { Sprint } from 'src/sprint/sprint.schema';
import { TaskState } from 'src/task-state/task-state.schema';

export interface UpdateTaskDto {
  readonly name: string;
  readonly state: TaskState;
  readonly column: BoardColumn;
  readonly done: boolean;
  readonly sprint: Sprint;
}