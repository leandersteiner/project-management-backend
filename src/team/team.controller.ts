import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards
} from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from './team.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { AuthGuard } from '../auth/auth.guard';
import { AllowedGuard } from '../auth/allowed.guard';
import { AddUserToTeamDto } from './dto/add-user-to-team.dto';

@UseGuards(AuthGuard, AllowedGuard)
@Controller('orgs/:orgId')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get('/teams')
  async getByUserId(@Param('userId') userId: string): Promise<Team[]> {
    return this.teamService.findAllForUser(userId);
  }

  @Post('/teams')
  async create(@Body() createTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamService.create(createTeamDto);
  }

  @Post('/:ownerId/teams/:teamId')
  async addUserToTeam(
    @Param('teamId') teamId: string,
    @Body() addUserDto: AddUserToTeamDto
  ): Promise<Team> {
    return this.teamService.addUserToTeam(addUserDto.userId, teamId);
  }

  @Delete('/:ownerId/teams/:teamId')
  async delete(@Param('teamId') teamId: string): Promise<Team> {
    const team = this.teamService.findById(teamId);
    await this.teamService.delete(teamId);
    return team;
  }
}
