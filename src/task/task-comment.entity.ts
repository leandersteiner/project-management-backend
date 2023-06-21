import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { User } from '../user/user.entity';
import { Task } from './task.entity';

@Entity()
export class TaskComment {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'text' })
  public comment: string;

  @ManyToOne(() => User)
  public creator: User;

  @ManyToOne(() => Task, (task) => task.comments)
  public task: Task;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;
}
