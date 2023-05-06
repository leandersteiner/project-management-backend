import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { Team } from './team.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private readonly repository: Repository<Team>,
    private readonly userService: UserService
  ) {}

  findAllForUser = async (userId: string): Promise<Team[]> => {
    return [
      ...(await this.findInvitedForUser(userId)),
      ...(await this.findOwnedForUser(userId))
    ];
  };

  findOwnedForUser = async (userId: string): Promise<Team[]> => {
    return this.repository.findBy({
      owner: {
        id: userId
      }
    });
  };

  findInvitedForUser = async (userId: string): Promise<Team[]> => {
    return this.repository.findBy({
      members: {
        id: userId
      }
    });
  };

  addUserToTeam = async (userId: string, teamId: string): Promise<Team> => {
    const team = await this.repository.findOneBy({ id: teamId });
    const user = await this.userService.findById(userId);
    team.members.push(user);
    await this.repository.save(team);
    return team;
  };

  create = async (createDto: CreateTeamDto): Promise<Team> => {
    return this.repository.create(createDto);
  };

  delete = async (id: string): Promise<void> => {
    await this.repository.delete({ id: id });
  };
}
