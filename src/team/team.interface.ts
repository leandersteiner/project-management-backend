import { Document } from 'mongoose';
import { Project } from 'src/project/project.interface';
import { User } from 'src/user/user.interface';

export interface Team extends Document {
  readonly name: String,
  readonly private: Boolean,
  readonly owner: User,
  readonly members: User[],
  readonly projects: Project[]
}