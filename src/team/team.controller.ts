import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from './team.schema';
import { CreateTeamDto } from './dto/create-team.dto';
import { BaseController } from '../common/base.controller';
import { UpdateTeamDto } from './dto/update-team.dto';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller()
export class TeamController extends BaseController<
  Team,
  CreateTeamDto,
  UpdateTeamDto
> {
  constructor(private readonly teamService: TeamService) {
    super(teamService);
  }

  @Get('/users/:id/teams')
  async getByUserId(@Request() req, @Param('id') id: string): Promise<Team[]> {
    //TODO: remove
    console.log(req.user);
    return this.teamService.findForUser(id);
  }
}
