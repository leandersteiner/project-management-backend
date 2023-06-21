import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { BoardColumn } from './board-column.entity';
import { Project } from '../project/project.entity';
import { BaseEntity } from 'src/common/typeorm/base.entity';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120 })
  public title: string;

  @OneToOne(() => Project)
  @JoinColumn()
  public project: Project;

  @OneToMany(() => BoardColumn, (boardColumn) => boardColumn.board, {
    eager: true
  })
  public columns: BoardColumn[];
}
