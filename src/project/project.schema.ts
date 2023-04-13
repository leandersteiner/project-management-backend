import mongoose from 'mongoose';
import { TeamSchema } from 'src/team/team.schema';

export const ProjectSchema = new mongoose.Schema(
  {
    name: String,
    team: TeamSchema,
    private: Boolean,
    boards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Boards'
      }
    ],
    taskStates: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TaskStates'
      }
    ],
    sprints: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sprints'
      }
    ]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
