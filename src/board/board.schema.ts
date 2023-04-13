import { Project } from 'src/project/project.schema';
import { TaskState } from 'src/task-state/task-state.schema';
import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BoardColumn } from '../board-column/board-column.schema';

export type BoardDocument = HydratedDocument<Board>;

@Schema({
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  versionKey: false
})
export class Board {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TaskState' })
  state: TaskState;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Project' })
  project: Project;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BoardColumn' }]
  })
  columns: BoardColumn[];
}

export const BoardSchema = SchemaFactory.createForClass(Board);
