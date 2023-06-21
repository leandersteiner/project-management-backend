import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Project } from '../project/project.entity';
import { BoardColumn } from '../board/board-column.entity';
import { BaseEntity } from 'src/common/typeorm/base.entity';

@Entity()
export class TaskState extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @ManyToOne(() => Project, (project) => project.taskStates, {
    onDelete: 'CASCADE'
  })
  public project: Project;

  @OneToMany(() => BoardColumn, (boardColumn) => boardColumn.taskState)
  public boardColumns: BoardColumn[];
}
