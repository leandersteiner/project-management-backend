import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { User } from '../user/user.entity';
import { TaskState } from './task-state.entity';
import { Sprint } from '../sprint/sprint.entity';
import { BoardColumn } from '../board/board-column.entity';
import { Subtask } from './subtask.entity';
import { TaskComment } from './task-comment.entity';
import { Project } from '../project/project.entity';

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

  @ManyToOne(() => User)
  public assignee: User;

  @Column({ nullable: true })
  public assigneeId: string;

  @ManyToOne(() => TaskState)
  @JoinColumn()
  public taskState: TaskState;

  @Column({ nullable: true })
  public taskStateId: string;

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

  @Column({ nullable: true })
  public sprintId: string;

  @ManyToOne(() => BoardColumn, (boardColumn) => boardColumn.tasks)
  public boardColumn: BoardColumn;

  @Column({ nullable: true })
  public boardColumnId: string;

  @ManyToOne(() => Project, (project) => project.tasks)
  public project: Project;

  @Column()
  public projectId: string;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;
}
