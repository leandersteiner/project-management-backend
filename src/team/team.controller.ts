import { Controller, Get, Param } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from './team.schema';
import { CreateTeamDto } from './dto/create-team.dto';
import { BaseController } from '../common/base.controller';
import { UpdateTeamDto } from './dto/update-team.dto';

@Controller()
export class TeamController extends BaseController<
  Team,
  CreateTeamDto,
  UpdateTeamDto
> {
  constructor(private readonly teamService: TeamService) {
    super(teamService);
  }

  @Get('/user/:id/teams')
  async getByUserId(@Param('id') id: string): Promise<Team[]> {
    return this.teamService.findForUser(id);
  }
}
