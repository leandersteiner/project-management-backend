import { Controller, Get, Param } from '@nestjs/common';
import { BaseController } from '../common/base.controller';
import { Task } from './task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController extends BaseController<
  Task,
  CreateTaskDto,
  UpdateTaskDto
> {
  constructor(private readonly taskService: TaskService) {
    super(taskService);
  }

  @Get('/:id')
  async findWithAll(@Param('id') id: string): Promise<Task> {
    return this.taskService.find(id);
  }
}
