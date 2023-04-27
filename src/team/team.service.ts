import { Injectable } from '@nestjs/common';
import { BaseService } from '../common/base.service';
import { Team } from './team.schema';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TeamService extends BaseService<
  Team,
  CreateTeamDto,
  UpdateTeamDto
> {
  constructor(
    @InjectModel(Team.name)
    private teamModel: Model<Team>
  ) {
    super(teamModel);
  }

  findAllForUser = async (userId: string): Promise<Team[]> => {
    return [
      ...(await this.findInvitedForUser(userId)),
      ...(await this.findOwnedForUser(userId))
    ];
  };

  findOwnedForUser = async (userId: string): Promise<Team[]> => {
    return this.teamModel.find({
      owner: userId
    });
  };

  findInvitedForUser = async (userId: string): Promise<Team[]> => {
    return this.teamModel.find({
      members: userId
    });
  };
}
