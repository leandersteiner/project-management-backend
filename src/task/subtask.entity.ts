import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Task } from './task.entity';
import { User } from '../user/user.entity';

@Entity()
export class Subtask {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @Column({ type: 'boolean', default: false })
  public done: boolean;

  @ManyToOne(() => Task, (task) => task.subtasks)
  public task: Task;

  @OneToOne(() => User)
  @JoinColumn()
  public creator: User;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;
}
