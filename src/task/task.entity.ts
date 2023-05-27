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
import { TaskState } from './task-state.entity';
import { Sprint } from '../sprint/sprint.entity';
import { BoardColumn } from '../board/board-column.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @Column({ type: 'text' })
  public description: string;

  @Column({ type: 'boolean', default: false })
  public done: boolean;

  @Column({ type: 'int', default: 1 })
  public priority: number;

  @OneToOne(() => User)
  @JoinColumn()
  public assignee: User;

  @OneToOne(() => TaskState)
  @JoinColumn()
  public state: TaskState;

  @ManyToOne(() => Sprint, (sprint) => sprint.tasks)
  public sprint: Sprint;

  @ManyToOne(() => BoardColumn, (boardColumn) => boardColumn.tasks)
  public boardColumn: BoardColumn;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;
}
