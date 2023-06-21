import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Task } from '../task/task.entity';
import { Project } from '../project/project.entity';
import { BaseEntity } from 'src/common/typeorm/base.entity';

@Entity()
export class Sprint extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @Column({ type: 'timestamptz' })
  public start: Date;

  @Column({ type: 'timestamptz' })
  public end: Date;

  @OneToOne(() => Project)
  @JoinColumn()
  public project: Project;

  @OneToMany(() => Task, (task) => task.sprint)
  public tasks: Task[];
}
