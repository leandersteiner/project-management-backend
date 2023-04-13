import mongoose from 'mongoose';
import { BoardColumnSchema } from 'src/board-column/board-column.schema';
import { SprintSchema } from 'src/sprint/sprint.schema';
import { TaskStateSchema } from 'src/task-state/task-state.schema';

export const TaskSchema = new mongoose.Schema(
  {
    name: String,
    state: TaskStateSchema,
    column: BoardColumnSchema,
    done: Boolean,
    sprint: SprintSchema
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
