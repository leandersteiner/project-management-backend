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
import { Task } from '../task/task.entity';
import { Project } from '../project/project.entity';

@Entity()
export class Sprint {
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

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;
}
