import { Document } from 'mongoose';

export interface TaskState extends Document {
  readonly name: string
}