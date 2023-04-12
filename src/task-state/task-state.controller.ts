import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TaskStateService } from './task-state.service';
import { TaskState } from './task-state.interface';

@Controller('task-states')
export class TaskStateController {
  constructor(private readonly taskStateService: TaskStateService) {
  }

  @Get()
  async getAll(): Promise<TaskState[]> {
    console.log('hi');
    return this.taskStateService.all({});
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<TaskState> {
    return this.taskStateService.find(id);
  }

  @Post()
  async create(
    @Body() postData: { name: string }
  ): Promise<TaskState> {
    return this.taskStateService.create({
      name: postData.name
    });
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<TaskState> {
    return this.taskStateService.delete(id);
  }
}
