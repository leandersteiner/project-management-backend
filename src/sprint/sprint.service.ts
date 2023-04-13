import { Injectable } from '@nestjs/common';
import { BaseService } from '../common/base.service';
import { Sprint } from './sprint.schema';
import { CreateSprintDto } from './dto/create-sprint.dto';
import { UpdateSprintDto } from './dto/update-sprint.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SprintService extends BaseService<
  Sprint,
  CreateSprintDto,
  UpdateSprintDto
> {
  constructor(
    @InjectModel(Sprint.name)
    private sprintModel: Model<Sprint>
  ) {
    super(sprintModel);
  }
}
