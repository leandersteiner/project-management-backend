import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TaskStateService } from './task-state.service';
import { TaskState } from './task-state.schema';
import { CreateTaskStateDto } from './dto/create-task-state.dto';

@Controller('task-states')
export class TaskStateController {
  constructor(private readonly taskStateService: TaskStateService) {}

  @Get()
  async getAll(): Promise<TaskState[]> {
    return this.taskStateService.all({});
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<TaskState> {
    return this.taskStateService.find(id);
  }

  @Post()
  async create(
    @Body() createTaskStateDto: CreateTaskStateDto
  ): Promise<TaskState> {
    return this.taskStateService.create(createTaskStateDto);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<TaskState> {
    return this.taskStateService.delete(id);
  }
}
