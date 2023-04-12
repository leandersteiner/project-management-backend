import * as mongoose from 'mongoose';
import { UserSchema } from 'src/user/user.schema';

export const TeamSchema = new mongoose.Schema(
  {
    name: String,
    private: Boolean,
    owner: UserSchema,
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
      }
    ]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
