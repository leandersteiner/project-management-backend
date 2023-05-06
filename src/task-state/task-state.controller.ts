import { Controller } from '@nestjs/common';
import { TaskStateService } from './task-state.service';

@Controller('task-states')
export class TaskStateController {
  constructor(private readonly taskStateService: TaskStateService) {}
}
