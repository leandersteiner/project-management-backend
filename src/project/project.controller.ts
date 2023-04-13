import { Controller } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './project.schema';
import { CreateProjectDto } from './dto/create-project.dto';
import { BaseController } from '../common/base.controller';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('projects')
export class ProjectController extends BaseController<
  Project,
  CreateProjectDto,
  UpdateProjectDto
> {
  constructor(private readonly projectService: ProjectService) {
    super(projectService);
  }
}
