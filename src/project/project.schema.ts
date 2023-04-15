import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Team } from '../team/team.schema';
import { TaskState } from '../task-state/task-state.schema';
import { Sprint } from '../sprint/sprint.schema';
import { Board } from '../board/board.schema';
import { User } from '../user/user.schema';

export type ProjectDocument = HydratedDocument<Project>;

@Schema({
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  versionKey: false
})
export class Project {
  @Prop()
  name: string;

  @Prop()
  private: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Team' })
  team: Team;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  members: User[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Board' }] })
  boards: Board[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TaskState' }] })
  taskStates: TaskState[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sprint' }] })
  sprints: Sprint[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
