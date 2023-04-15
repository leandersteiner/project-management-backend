import { Injectable } from '@nestjs/common';
import { BaseService } from '../common/base.service';
import { Project } from './project.schema';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProjectService extends BaseService<
  Project,
  CreateProjectDto,
  UpdateProjectDto
> {
  constructor(
    @InjectModel(Project.name)
    private projectModel: Model<Project>
  ) {
    super(projectModel);
  }
}
