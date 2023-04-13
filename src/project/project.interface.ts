import { Document } from 'mongoose';
import { Board } from 'src/board/board.interface';
import { Sprint } from 'src/sprint/sprint.interface';
import { TaskState } from 'src/task-state/task-state.schema';
import { Team } from 'src/team/team.interface';

export interface Project extends Document {
  readonly name: string;
  readonly team: Team;
  readonly private: boolean;
  readonly boards: Board[];
  readonly taskStates: TaskState[];
  readonly sprints: Sprint[];
}
