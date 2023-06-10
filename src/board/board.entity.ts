import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { BoardColumn } from './board-column.entity';
import { Project } from '../project/project.entity';

@Entity()
export class Board {
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

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;
}
