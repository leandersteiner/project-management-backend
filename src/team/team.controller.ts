import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from './team.schema';
import { CreateTeamDto } from './dto/create-team.dto';
import { BaseController } from '../common/base.controller';
import { UpdateTeamDto } from './dto/update-team.dto';
import { AuthGuard } from '../auth/auth.guard';
import { AllowedGuard } from '../auth/allowed.guard';

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

  @UseGuards(AllowedGuard)
  @Get('/users/:userId/teams')
  async getByUserId(
    @Request() req,
    @Param('userId') id: string
  ): Promise<Team[]> {
    return this.teamService.findForUser(id);
  }
}
