import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Team } from '../team/team.entity';
import { Exclude } from 'class-transformer';
import { Organisation } from '../organisation/organisation.entity';
import { Project } from '../project/project.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120 })
  public username: string;

  @Column({ type: 'varchar', length: 120 })
  @Exclude()
  public password: string;

  @Column({ type: 'varchar', length: 120 })
  public email: string;

  @Column({ type: 'boolean', default: false })
  @Exclude()
  public isDeleted: boolean;

  @OneToMany(() => Organisation, (organisation) => organisation.owner)
  public organisations: Organisation[];

  @OneToMany(() => Team, (team) => team.owner)
  public teams: Team[];

  @OneToMany(() => Project, (project) => project.owner)
  public projects: Project[];

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;
}
