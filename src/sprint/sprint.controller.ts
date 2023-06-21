import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseInterceptors
} from '@nestjs/common';
import { SprintService } from './sprint.service';
import { Sprint } from './sprint.entity';
import { CreateSprintDto } from './dto/create-sprint.dto';
import { UpdateSprintDto } from './dto/update-sprint.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('projects/:projectId/sprints')
export class SprintController {
  constructor(private readonly sprintService: SprintService) {}

  @HttpCode(HttpStatus.OK)
  @Get('/')
  async findAll(@Param('projectId') projectId: string): Promise<Sprint[]> {
    return this.sprintService.findAllForProject(projectId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:sprintId')
  async findById(@Param('sprintId') sprintId: string): Promise<Sprint> {
    return this.sprintService.findOne(sprintId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/')
  async create(
    @Param('projectId') projectId: string,
    @Body() createDto: CreateSprintDto
  ): Promise<Sprint> {
    return this.sprintService.create(projectId, createDto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch('/:sprintId')
  async update(
    @Param('sprintId') sprintId: string,
    @Body() updateDto: UpdateSprintDto
  ): Promise<Sprint> {
    return this.sprintService.update(sprintId, updateDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:sprintId')
  async delete(@Param('sprintId') sprintId: string): Promise<void> {
    return this.sprintService.delete(sprintId);
  }
}
