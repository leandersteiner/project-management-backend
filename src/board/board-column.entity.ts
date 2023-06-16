import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { TaskState } from '../task/task-state.entity';
import { Task } from '../task/task.entity';
import { Board } from './board.entity';

@Entity()
export class BoardColumn {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120 })
  public title: string;

  @Column({ type: 'int' })
  public position: number;

  @ManyToOne(() => TaskState, (taskState) => taskState.boardColumns, {
    eager: true
  })
  public state: TaskState;

  @OneToMany(() => Task, (task) => task.boardColumn, { eager: true })
  public tasks: Task[];

  @ManyToOne(() => Board, (board) => board.columns)
  public board: Board;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;
}
