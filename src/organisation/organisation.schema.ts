import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Team } from '../team/team.schema';

export type OrganisationDocument = HydratedDocument<Organisation>;

@Schema()
export class Organisation {
  id: string;

  @Prop()
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }] })
  teams: Team[];
}

export const OrganisationSchema = SchemaFactory.createForClass(Organisation);
