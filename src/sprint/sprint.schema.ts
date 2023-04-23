import mongoose, { HydratedDocument } from 'mongoose';
import { Project } from 'src/project/project.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Task } from '../task/task.schema';

export type SprintDocument = HydratedDocument<Sprint>;

@Schema({
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  versionKey: false
})
export class Sprint {
  id: string;

  @Prop()
  name: string;

  @Prop()
  start: Date;

  @Prop()
  end: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Project' })
  project: Project;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }] })
  tasks: Task[];
}

export const SprintSchema = SchemaFactory.createForClass(Sprint);
