import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Project } from './project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { TeamService } from '../team/team.service';
import { BoardService } from '../board/board.service';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly repository: Repository<Project>,
    private readonly userService: UserService,
    private readonly teamService: TeamService,
    private readonly boardService: BoardService
  ) {}

  findById = async (user: User, projectId: string): Promise<Project> => {
    const project = await this.repository.findOneBy({ id: projectId });
    this.ensureAllowed(user, project, 'member');
    return project;
  };

  findAllForUser = async (user: User): Promise<Project[]> => {
    return [
      ...(await this.findInvitedForUser(user)),
      ...(await this.findOwnedByUser(user))
    ];
  };

  findOwnedByUser = async (user: User): Promise<Project[]> => {
    return this.repository.findBy({
      owner: {
        id: user.id
      }
    });
  };

  findInvitedForUser = async (user: User): Promise<Project[]> => {
    return this.repository.findBy({
      members: {
        id: user.id
      }
    });
  };

  findAllForUserInOrg = async (
    user: User,
    orgId: string
  ): Promise<Project[]> => {
    return [
      ...(await this.findInvitedForUserInOrg(user, orgId)),
      ...(await this.findOwnedByUserInOrg(user, orgId))
    ];
  };

  findOwnedByUserInOrg = async (
    user: User,
    orgId: string
  ): Promise<Project[]> => {
    return this.repository.findBy({
      owner: {
        id: user.id
      },
      team: {
        organisation: {
          id: orgId
        }
      }
    });
  };

  findInvitedForUserInOrg = async (
    user: User,
    orgId: string
  ): Promise<Project[]> => {
    return this.repository.findBy({
      members: {
        id: user.id
      },
      team: {
        organisation: {
          id: orgId
        }
      }
    });
  };

  findAllForUserInTeam = async (
    user: User,
    teamId: string
  ): Promise<Project[]> => {
    return [
      ...(await this.findInvitedForUserInTeam(user, teamId)),
      ...(await this.findOwnedByUserInTeam(user, teamId))
    ];
  };

  findOwnedByUserInTeam = async (
    user: User,
    teamId: string
  ): Promise<Project[]> => {
    return this.repository.findBy({
      owner: {
        id: user.id
      },
      team: {
        id: teamId
      }
    });
  };

  findInvitedForUserInTeam = async (
    user: User,
    teamId: string
  ): Promise<Project[]> => {
    return this.repository.findBy({
      members: {
        id: user.id
      },
      team: {
        id: teamId
      }
    });
  };

  addUserToProject = async (
    user: User,
    userId: string,
    projectId: string
  ): Promise<Project> => {
    const project = await this.repository.findOneBy({ id: projectId });
    this.ensureAllowed(user, project, 'owner');
    const memberIds = project.members.map((member) => member.id);
    if (memberIds.includes(user.id)) return project;
    const userToAdd = await this.userService.findById(userId);
    project.members.push(userToAdd);
    return this.repository.save(project);
  };

  getAllMember = async (projectId: string): Promise<User[]> => {
    const project = await this.repository.findOneBy({ id: projectId });
    return [...project.members, project.owner];
  };

  create = async (
    user: User,
    orgId: string,
    teamId: string,
    createDto: CreateProjectDto
  ): Promise<Project> => {
    const team = await this.teamService.findById(user, orgId, teamId);
    const project = await this.repository.save({
      ...createDto,
      owner: user,
      team: team
    });
    await this.boardService.createForProject(project.id);
    return project;
  };

  delete = async (user: User, projectId: string): Promise<void> => {
    const project = await this.findById(user, projectId);
    this.ensureAllowed(user, project, 'owner');
    await this.repository.delete({ id: projectId });
  };

  private ensureAllowed = (
    user: User,
    project: Project,
    role: 'owner' | 'member'
  ): void => {
    if (
      role === 'owner' &&
      (user.id !== project.owner.id ||
        project.team.owner.id !== user.id ||
        project.team.organisation.owner.id !== user.id)
    ) {
      throw new UnauthorizedException();
    }
    if (role === 'member') {
      let result = true;
      if (
        !project.members.includes(user) ||
        !project.team.members.includes(user) ||
        !project.team.organisation.members.includes(user)
      ) {
        result = false;
      }
      if (project.owner.id === user.id) {
        result = true;
      }
      if (result === false) throw new UnauthorizedException();
    }
  };
}
