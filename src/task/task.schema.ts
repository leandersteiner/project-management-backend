import mongoose, { HydratedDocument } from 'mongoose';
import { TaskState } from 'src/task-state/task-state.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BoardColumn } from '../board-column/board-column.schema';
import { Sprint } from '../sprint/sprint.schema';

export type TaskDocument = HydratedDocument<Task>;

@Schema({
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  versionKey: false
})
export class Task {
  @Prop()
  name: string;

  @Prop()
  done: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'BoardColumn' })
  column: BoardColumn;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TaskState' })
  state: TaskState;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Sprint' })
  sprint: Sprint;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
