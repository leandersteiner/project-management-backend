import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Task } from '../task/task.schema';
import { TaskState } from '../task-state/task-state.schema';

export type BoardColumnDocument = HydratedDocument<BoardColumn>;

@Schema({
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  versionKey: false
})
export class BoardColumn {
  @Prop()
  title: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TaskState' })
  state: TaskState;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }] })
  tasks: Task[];
}

export const BoardColumnSchema = SchemaFactory.createForClass(BoardColumn);
