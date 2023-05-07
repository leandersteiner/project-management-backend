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

  findById = async (teamId: string): Promise<Team> => {
    return this.repository.findOneBy({ id: teamId });
  };

  findAllForUser = async (userId: string): Promise<Team[]> => {
    return [
      ...(await this.findInvitedForUser(userId)),
      ...(await this.findOwnedByUser(userId))
    ];
  };

  findOwnedByUser = async (userId: string): Promise<Team[]> => {
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
    const team = await this.repository.findOne({
      where: { id: teamId },
      relations: ['members']
    });
    const user = await this.userService.findById(userId);
    const memberIds = team.members.map((member) => member.id);
    if (memberIds.includes(user.id)) return team;
    await this.repository.save(team);
    return team;
  };

  create = async (createDto: CreateTeamDto): Promise<Team> => {
    return this.repository.save(createDto);
  };

  delete = async (id: string): Promise<void> => {
    await this.repository.delete({ id: id });
  };
}
