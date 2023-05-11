import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './project.entity';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller()
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @HttpCode(HttpStatus.OK)
  @Get('/projects')
  async getAllForUser(): Promise<Project[]> {
    return this.projectService.findAllForUser('userid');
  }

  @HttpCode(HttpStatus.OK)
  @Get('/projects/:projectId')
  async getById(): Promise<Project> {
    return this.projectService.findById('projectId');
  }

  @HttpCode(HttpStatus.OK)
  @Get('orgs/:orgId/projects')
  async getById(): Promise<Project[]> {
    return this.projectService.findById('projectId');
  }

  @HttpCode(HttpStatus.OK)
  @Get('orgs/:orgId/projects/:projectId')
  async getById(): Promise<Project> {
    return this.projectService.findById('projectId');
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('orgs/:orgId/projects/:projectId')
  async create(@Body() createDto: CreateProjectDto): Promise<Project> {
    return this.projectService.create(createDto);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('orgs/:orgId/projects/:projectId')
  async create(@Body() createDto: CreateProjectDto): Promise<Project> {
    return this.projectService.create(createDto);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('orgs/:orgId/projects/:projectId')
  async addUserToProject(
    @Body() addUserDto: AdduserToProjectDto
  ): Promise<Project> {
    return this.projectService.addUser(addUserDto);
  }
}
