import { Controller } from '@nestjs/common';
import { TaskStateService } from './task-state.service';
import { TaskState } from './task-state.schema';
import { CreateTaskStateDto } from './dto/create-task-state.dto';
import { BaseController } from '../common/base.controller';
import { UpdateTaskStateDto } from './dto/update-task-state.dto';

@Controller('task-states')
export class TaskStateController extends BaseController<
  TaskState,
  CreateTaskStateDto,
  UpdateTaskStateDto
> {
  constructor(private readonly taskStateService: TaskStateService) {
    super(taskStateService);
  }
}
