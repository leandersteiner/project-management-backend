import { Controller } from '@nestjs/common';
import { BaseController } from '../common/base.controller';
import { Task } from './task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController extends BaseController<
  Task,
  CreateTaskDto,
  UpdateTaskDto
> {
  constructor(private readonly taskService: TaskService) {
    super(taskService);
  }
}
