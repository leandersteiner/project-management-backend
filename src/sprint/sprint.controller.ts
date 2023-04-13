import { Controller } from '@nestjs/common';
import { BaseController } from '../common/base.controller';
import { Sprint } from './sprint.schema';
import { CreateSprintDto } from './dto/create-sprint.dto';
import { UpdateSprintDto } from './dto/update-sprint.dto';
import { SprintService } from './sprint.service';

@Controller('sprint')
export class SprintController extends BaseController<
  Sprint,
  CreateSprintDto,
  UpdateSprintDto
> {
  constructor(private readonly sprintService: SprintService) {
    super(sprintService);
  }
}
