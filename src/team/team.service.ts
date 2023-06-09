import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { Team } from './team.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { User } from '../user/user.entity';
import { OrganisationService } from '../organisation/organisation.service';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private readonly repository: Repository<Team>,
    private readonly userService: UserService,
    private readonly orgService: OrganisationService
  ) {}

  findById = async (
    user: User,
    orgId: string,
    teamId: string
  ): Promise<Team> => {
    const team = await this.repository.findOneBy({
      id: teamId,
      organisation: {
        id: orgId
      }
    });

    this.ensureAllowed(user, team, 'member');
    return team;
  };

  findAllForUser = async (user: User): Promise<Team[]> => {
    return [
      ...(await this.findInvitedForUser(user)),
      ...(await this.findOwnedByUser(user))
    ];
  };

  findOwnedByUser = async (user: User): Promise<Team[]> => {
    return this.repository.findBy({
      owner: {
        id: user.id
      }
    });
  };

  findInvitedForUser = async (user: User): Promise<Team[]> => {
    return this.repository.findBy({
      members: {
        id: user.id
      }
    });
  };

  findAllForUserInOrg = async (user: User, orgId: string): Promise<Team[]> => {
    return [
      ...(await this.findInvitedForUserInOrg(user, orgId)),
      ...(await this.findOwnedByUserInOrg(user, orgId))
    ];
  };

  findOwnedByUserInOrg = async (user: User, orgId: string): Promise<Team[]> => {
    return this.repository.findBy({
      owner: {
        id: user.id
      },
      organisation: {
        id: orgId
      }
    });
  };

  findInvitedForUserInOrg = async (
    user: User,
    orgId: string
  ): Promise<Team[]> => {
    return this.repository.findBy({
      members: {
        id: user.id
      },
      organisation: {
        id: orgId
      }
    });
  };

  addUserToTeam = async (
    user: User,
    userId: string,
    teamId: string
  ): Promise<Team> => {
    const team = await this.repository.findOneBy({ id: teamId });
    this.ensureAllowed(user, team, 'owner');
    const memberIds = team.members.map((member) => member.id);
    if (memberIds.includes(user.id)) return team;
    const userToAdd = await this.userService.findById(userId);
    team.members.push(userToAdd);
    return this.repository.save(team);
  };

  create = async (
    user: User,
    orgId: string,
    createDto: CreateTeamDto
  ): Promise<Team> => {
    const org = await this.orgService.findById(user, orgId);
    return this.repository.save({
      ...createDto,
      owner: user,
      organisation: org
    });
  };

  delete = async (user: User, orgId: string, teamId: string): Promise<void> => {
    const team = await this.findById(user, orgId, teamId);
    this.ensureAllowed(user, team, 'owner');
    await this.repository.delete({ id: teamId });
  };

  private ensureAllowed = (
    user: User,
    team: Team,
    role: 'owner' | 'member'
  ): void => {
    if (
      role === 'owner' &&
      (user.id !== team.owner.id || team.organisation.owner.id !== user.id)
    ) {
      throw new UnauthorizedException();
    }
    if (role === 'member') {
      let result = true;
      if (!team.members.includes(user)) {
        result = false;
      }
      if (team.owner.id === user.id) {
        result = true;
      }
      if (result === false) throw new UnauthorizedException();
    }
  };
}
