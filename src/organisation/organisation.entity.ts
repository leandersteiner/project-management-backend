import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Team } from '../team/team.entity';
import { User } from '../user/user.entity';

@Entity()
export class Organisation {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @OneToMany(() => Team, (team) => team.organisation)
  public team: Team[];

  @ManyToMany(() => User)
  @JoinTable()
  public members: User[];

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;
}
