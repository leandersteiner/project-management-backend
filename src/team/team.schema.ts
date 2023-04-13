import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/user/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Project } from '../project/project.schema';

export type TeamDocument = HydratedDocument<Team>;

@Schema({
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  versionKey: false
})
export class Team {
  @Prop()
  name: string;

  @Prop()
  private: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  owner: User;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  members: User[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }] })
  projects: Project[];
}

export const TeamSchema = SchemaFactory.createForClass(Team);
