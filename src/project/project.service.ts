import { Injectable } from '@nestjs/common';
import { BaseService } from '../common/base.service';
import { Project } from './project.schema';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService extends BaseService<
  Project,
  CreateProjectDto,
  UpdateProjectDto
> {}
