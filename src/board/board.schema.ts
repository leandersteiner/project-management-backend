import * as mongoose from 'mongoose';
import { ProjectSchema } from 'src/project/project.schema';
import { TaskStateSchema } from 'src/task-state/task-state.schema';

export const BoardSchema = new mongoose.Schema(
  {
    state: TaskStateSchema,
    project: ProjectSchema,
    columns: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BoardColumn'
      }
    ]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
