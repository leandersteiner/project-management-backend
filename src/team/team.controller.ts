import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
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

  @HttpCode(HttpStatus.OK)
  @Get('/teams')
  async getByUserId(@Param('userId') userId: string): Promise<Team[]> {
    return this.teamService.findAllForUser(userId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/teams/:teamId')
  async getById(@Param('teamId') teamId: string): Promise<Team> {
    return this.teamService.findById(teamId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/teams')
  async create(@Body() createTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamService.create(createTeamDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/:ownerId/teams/:teamId')
  async addUserToTeam(
    @Param('teamId') teamId: string,
    @Body() addUserDto: AddUserToTeamDto
  ): Promise<Team> {
    return this.teamService.addUserToTeam(addUserDto.userId, teamId);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/teams/:teamId')
  async delete(@Param('teamId') teamId: string): Promise<Team> {
    const team = this.teamService.findById(teamId);
    await this.teamService.delete(teamId);
    return team;
  }
}
