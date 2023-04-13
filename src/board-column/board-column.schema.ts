import mongoose from 'mongoose';

export const BoardColumnSchema = new mongoose.Schema(
  {
    name: String,
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
