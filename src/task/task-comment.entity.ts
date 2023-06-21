import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Task } from './task.entity';
import { BaseEntity } from 'src/common/typeorm/base.entity';

@Entity()
export class TaskComment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'text' })
  public comment: string;

  @ManyToOne(() => User, { eager: true, onDelete: 'CASCADE' })
  public creator: User;

  @ManyToOne(() => Task, (task) => task.comments, { onDelete: 'CASCADE' })
  public task: Task;
}
