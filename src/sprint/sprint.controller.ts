import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { SprintService } from './sprint.service';
import { Sprint } from './sprint.entity';
import { CreateSprintDto } from './dto/create-sprint.dto';
import { UpdateSprintDto } from './dto/update-sprint.dto';

@Controller('projects/:projectId/sprints')
export class SprintController {
  constructor(private readonly sprintService: SprintService) {}

  @HttpCode(HttpStatus.OK)
  @Get('/')
  async findAll(): Promise<Sprint[]> {
    return this.sprintService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:sprintId')
  async findById(@Param('sprintId') sprintId: string): Promise<Sprint> {
    return this.sprintService.findById(sprintId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/')
  async create(@Body() createDto: CreateSprintDto): Promise<Sprint> {
    return this.sprintService.create(createDto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch('/:sprintId')
  async update(@Body() updateDto: UpdateSprintDto): Promise<Sprint> {
    return this.sprintService.update(updateDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:sprintId')
  async delete(@Param('sprintId') sprintId: string): Promise<Sprint> {
    return this.sprintService.delete(sprintId);
  }
}
