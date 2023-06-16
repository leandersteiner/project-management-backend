import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { User } from '../user/user.entity';
import { TaskState } from './task-state.entity';
import { Sprint } from '../sprint/sprint.entity';
import { BoardColumn } from '../board/board-column.entity';
import { Subtask } from './subtask.entity';
import { TaskComment } from './task-comment.entity';

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

  @Column({ type: 'int' })
  public position: number;

  @OneToOne(() => User)
  @JoinColumn()
  public assignee: User;

  @OneToOne(() => TaskState)
  @JoinColumn()
  public state: TaskState;

  @ManyToOne(() => User)
  public creator: User;

  @OneToMany(() => Subtask, (subtask) => subtask.task, {
    eager: true
  })
  public subtasks: Subtask[];

  @OneToMany(() => TaskComment, (taskComment) => taskComment.task, {
    eager: true
  })
  public comments: TaskComment[];

  @ManyToOne(() => Sprint, (sprint) => sprint.tasks)
  public sprint: Sprint;

  @ManyToOne(() => BoardColumn, (boardColumn) => boardColumn.tasks)
  public boardColumn: BoardColumn;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;
}
