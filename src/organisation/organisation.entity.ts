import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Team } from '../team/team.entity';
import { User } from '../user/user.entity';
import { BaseEntity } from 'src/common/typeorm/base.entity';

@Entity()
export class Organisation extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @ManyToOne(() => User, (user) => user.teams, {
    eager: true,
    onDelete: 'CASCADE'
  })
  public owner: User;

  @OneToMany(() => Team, (team) => team.organisation)
  public teams: Team[];

  @ManyToMany(() => User, { eager: true })
  @JoinTable()
  public members: User[];
}
