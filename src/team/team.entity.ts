import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

import { User } from '../user/user.entity';
import { Project } from '../project/project.entity';
import { Organisation } from '../organisation/organisation.entity';
import { BaseEntity } from 'src/common/typeorm/base.entity';

@Entity()
export class Team extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @Column({ type: 'boolean', default: false })
  public private: boolean;

  @ManyToOne(() => User, (user) => user.teams, { eager: true })
  public owner: User;

  @ManyToMany(() => User, { eager: true })
  @JoinTable()
  public members: User[];

  @OneToMany(() => Project, (project) => project.team)
  public projects: Project[];

  @ManyToOne(() => Organisation, (organisation) => organisation.teams, {
    eager: true
  })
  public organisation: Organisation;
}
