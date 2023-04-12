import * as mongoose from 'mongoose';
import { ProjectSchema } from 'src/project/project.schema';

export const TaskStateSchema = new mongoose.Schema(
  {
    name: String
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
