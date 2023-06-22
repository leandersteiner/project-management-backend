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
import { ProjectService } from './project.service';
import { Project } from './project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ReqUser } from '../common/helper/user.decorator';
import { User } from '../user/user.entity';
import { AddUserToProjectDto } from './dto/add-user-to-project.dto';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller()
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @HttpCode(HttpStatus.OK)
  @Get('/projects')
  async getAllForUser(@ReqUser() user: User): Promise<Project[]> {
    return this.projectService.findAllForUser(user);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/projects/:projectId')
  async getById(
    @ReqUser() user: User,
    @Param('projectId') projectId: string
  ): Promise<Project> {
    return this.projectService.findById(user, projectId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/projects/:projectId/members')
  async getAllMember(
    @ReqUser() user: User,
    @Param('projectId') projectId: string
  ): Promise<User[]> {
    return this.projectService.getAllMember(projectId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('orgs/:orgId/projects')
  async getAllInOrg(
    @ReqUser() user: User,
    @Param('orgId') orgId: string
  ): Promise<Project[]> {
    return this.projectService.findAllForUserInOrg(user, orgId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('orgs/:orgId/teams/:teamId/projects')
  async getAllInTeam(
    @ReqUser() user: User,
    @Param('teamId') teamId: string
  ): Promise<Project[]> {
    return this.projectService.findAllForUserInTeam(user, teamId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('orgs/:orgId/teams/:teamId/projects')
  async create(
    @ReqUser() user: User,
    @Param('orgId') orgId: string,
    @Param('teamId') teamId: string,
    @Body() createDto: CreateProjectDto
  ): Promise<Project> {
    return this.projectService.create(user, orgId, teamId, createDto);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('orgs/:orgId/teams/:teamId/projects/:projectId')
  async addUserToProject(
    @ReqUser() user: User,
    @Param('orgId') orgId: string,
    @Param('teamId') teamId: string,
    @Param('projectId') projectId: string,
    @Body() addUserDto: AddUserToProjectDto
  ): Promise<Project> {
    return this.projectService.addUserToProject(
      user,
      addUserDto.userId,
      projectId
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('orgs/:orgId/teams/:teamId/projects/:projectId')
  async delete(
    @ReqUser() user: User,
    @Param('projectId') projectId: string
  ): Promise<void> {
    return this.projectService.delete(user, projectId);
  }
}
