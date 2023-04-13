import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Task } from '../task/task.schema';

export type BoardColumnDocument = HydratedDocument<BoardColumn>;

@Schema({
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  versionKey: false
})
export class BoardColumn {
  @Prop()
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }] })
  tasks: Task[];
}

export const BoardColumnSchema = SchemaFactory.createForClass(BoardColumn);
