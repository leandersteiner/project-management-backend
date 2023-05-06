import { Controller } from '@nestjs/common';
import { SprintService } from './sprint.service';

@Controller('sprints')
export class SprintController {
  constructor(private readonly sprintService: SprintService) {}
}
