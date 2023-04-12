import * as mongoose from 'mongoose';

export const TaskStateSchema = new mongoose.Schema(
  {
    name: String
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false
  }
);
