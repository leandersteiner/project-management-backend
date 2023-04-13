import mongoose from 'mongoose';
import { ProjectSchema } from 'src/project/project.schema';

export const SprintSchema = new mongoose.Schema(
  {
    name: String,
    project: ProjectSchema,
    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tasks'
      }
    ]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
