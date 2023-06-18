import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Project } from '../project/project.entity';
import { BoardColumn } from '../board/board-column.entity';

@Entity()
export class TaskState {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @ManyToOne(() => Project, (project) => project.taskStates)
  public project: Project;

  @OneToMany(() => BoardColumn, (boardColumn) => boardColumn.taskState)
  public boardColumns: BoardColumn[];

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;
}
