import { BoardColumn } from 'src/board-column/board-column.schema';
import { Project } from 'src/project/project.schema';
import { TaskState } from 'src/task-state/task-state.schema';

export interface CreateBoardDto {
  readonly state: TaskState;
  readonly project: Project;
  readonly columns: BoardColumn[];
}
