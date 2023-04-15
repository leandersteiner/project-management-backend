import { BoardColumn } from 'src/board-column/board-column.schema';
import { Sprint } from 'src/sprint/sprint.schema';
import { TaskState } from 'src/task-state/task-state.schema';
import { User } from '../../user/user.schema';

export interface UpdateTaskDto {
  readonly name: string;
  readonly description: string;
  readonly state: TaskState;
  readonly column: BoardColumn;
  readonly done: boolean;
  readonly sprint: Sprint;
  readonly assignee: User;
}
