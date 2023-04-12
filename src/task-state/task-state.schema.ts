import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TaskStateDocument = HydratedDocument<TaskState>;

@Schema(
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false
  }
)
export class TaskState {
  @Prop()
  name: string;
}

export const TaskStateSchema = SchemaFactory.createForClass(TaskState);