import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from './team.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { AuthGuard } from '../auth/auth.guard';
import { AddUserToTeamDto } from './dto/add-user-to-team.dto';
import { ReqUser } from '../common/helper/user.decorator';
import { User } from '../user/user.entity';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller()
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @HttpCode(HttpStatus.OK)
  @Get('/teams')
  async getAll(@ReqUser() user: User): Promise<Team[]> {
    return this.teamService.findAllForUser(user);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/orgs/:orgId/teams')
  async getAllInOrg(
    @ReqUser() user: User,
    @Param('orgId') orgId: string
  ): Promise<Team[]> {
    return this.teamService.findAllForUserInOrg(user, orgId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/orgs/:orgId/teams/:teamId')
  async getById(
    @ReqUser() user: User,
    @Param('orgId') orgId: string,
    @Param('teamId') teamId: string
  ): Promise<Team> {
    return this.teamService.findById(user, orgId, teamId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/orgs/:orgId/teams')
  async create(
    @ReqUser() user: User,
    @Param('orgId') orgId: string,
    @Body() createTeamDto: CreateTeamDto
  ): Promise<Team> {
    return this.teamService.create(user, orgId, createTeamDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/orgs/:orgId/teams/:teamId')
  async addUserToTeam(
    @ReqUser() user: User,
    @Param('teamId') teamId: string,
    @Body() addUserDto: AddUserToTeamDto
  ): Promise<Team> {
    return this.teamService.addUserToTeam(user, addUserDto.userId, teamId);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('orgs/:orgId/teams/:teamId')
  async delete(
    @ReqUser() user: User,
    @Param('orgId') orgId: string,
    @Param('teamId') teamId: string
  ): Promise<void> {
    await this.teamService.delete(user, orgId, teamId);
    return;
  }
}
