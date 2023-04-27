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

  findForUser = async (userId: string): Promise<Team[]> => {
    const ownedTeams = await this.teamModel.find({
      owner: userId
    });

    const invitedTeams = await this.teamModel.find({
      members: userId
    });

    return [...ownedTeams, ...invitedTeams];
  };
}
