import { Controller, Get, Param } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/test/:id')
  async findWithAll(@Param('id') id: string): Promise<Task> {
    return this.taskService.findRel(id);
  }
}
