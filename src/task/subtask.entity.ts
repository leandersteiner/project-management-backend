import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './task.entity';
import { User } from '../user/user.entity';
import { BaseEntity } from 'src/common/typeorm/base.entity';

@Entity()
export class Subtask extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @Column({ type: 'boolean', default: false })
  public done: boolean;

  @ManyToOne(() => Task, (task) => task.subtasks)
  public task: Task;

  @ManyToOne(() => User)
  public creator: User;
}
