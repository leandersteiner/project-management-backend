import { Document } from 'mongoose';
import { Board } from 'src/board/board.interface';
import { Sprint } from 'src/sprint/sprint.interface';
import { TaskState } from 'src/task-state/task-state.interface';
import { Team } from 'src/team/team.interface';

export interface Project extends Document {
  readonly name: String,
  readonly team: Team,
  readonly private: Boolean,
  readonly boards: Board[],
  readonly taskStates: TaskState[],
  readonly sprints: Sprint[]
}