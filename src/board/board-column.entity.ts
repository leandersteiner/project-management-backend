import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { TaskState } from '../task/task-state.entity';
import { Task } from '../task/task.entity';
import { Board } from './board.entity';
import { BaseEntity } from 'src/common/typeorm/base.entity';

@Entity()
export class BoardColumn extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120 })
  public title: string;

  @Column({ type: 'int' })
  public position: number;

  @ManyToOne(() => TaskState, (taskState) => taskState.boardColumns, {
    eager: true,
    onDelete: 'CASCADE'
  })
  public taskState: TaskState;

  @Column()
  public taskStateId: string;

  @OneToMany(() => Task, (task) => task.boardColumn, { eager: true })
  public tasks: Task[];

  @ManyToOne(() => Board, (board) => board.columns, { onDelete: 'CASCADE' })
  public board: Board;
}
