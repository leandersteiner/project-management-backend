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
import { User } from '../user/user.entity';
import { Task } from './task.entity';

@Entity()
export class TaskComment {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120 })
  public title: string;

  @Column({ type: 'text' })
  public content: string;

  @OneToOne(() => User)
  @JoinColumn()
  public creator: User;

  @ManyToOne(() => Task, (task) => task.comments)
  public task: Task;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;
}
