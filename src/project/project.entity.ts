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
import { TaskState } from '../task-state/task-state.entity';
import { Sprint } from '../sprint/sprint.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @Column({ type: 'boolean' })
  public private: boolean;

  @ManyToOne(() => Team, (team) => team.projects)
  public team: Team;

  @ManyToMany(() => User)
  @JoinTable()
  public invitedMembers: User[];

  @OneToMany(() => Board, (board) => board.project)
  public boards: Board[];

  @OneToMany(() => TaskState, (taskState) => taskState.project)
  public taskStates: TaskState[];

  @OneToMany(() => Sprint, (sprint) => sprint.project)
  public sprints: Sprint[];

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;
}
