import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Team } from '../team/team.entity';
import { User } from '../user/user.entity';
import { Board } from '../board/board.entity';
import { TaskState } from '../task/task-state.entity';
import { Sprint } from '../sprint/sprint.entity';
import { Task } from '../task/task.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @Column({ type: 'boolean' })
  public private: boolean;

  @ManyToOne(() => User, { eager: true })
  public owner: User;

  @ManyToOne(() => Team, (team) => team.projects, { eager: true })
  public team: Team;

  @ManyToMany(() => User, { eager: true })
  @JoinTable()
  public members: User[];

  @OneToMany(() => Board, (board) => board.project)
  public boards: Board[];

  @OneToMany(() => Task, (task) => task.project, { eager: true })
  public tasks: Task[];

  @OneToMany(() => TaskState, (taskState) => taskState.project)
  public taskStates: TaskState[];

  @OneToMany(() => Sprint, (sprint) => sprint.project)
  public sprints: Sprint[];

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;
}
