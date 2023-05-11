import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { Task } from './task.entity';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('projects/:projectId')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @HttpCode(HttpStatus.OK)
  @Get('/tasks')
  async findAll(@Param('projectId') projectId: string): Promise<Task[]> {
    return this.taskService.allForProject(projectId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/tasks/:taskId')
  async find(
    @Param('projectId') projectId: string,
    @Param('taskId') taskId: string
  ): Promise<Task> {
    return this.taskService.oneForProject(projectId, taskId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/board/columns/:columnId/tasks')
  async findAllForColumn(
    @Param('projectId') projectId: string,
    @Param('columnId') columnId: string
  ): Promise<Task[]> {
    return this.taskService.allForColumn(projectId, columnId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/tasks')
  async create(@Body() createDto: CreateTaskDto): Promise<Task[]> {
    return this.taskService.create(createDto);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/board/columns/:columnId/tasks')
  async create(@Body() createDto: CreateTaskDto): Promise<Task> {
    return this.taskService.create(createDto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch('/tasks/:taskId')
  async update(@Body() updateDto: UpdateTaskDto): Promise<Task> {
    return this.taskService.update(updateDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/tasks/:taskId')
  async delete(): Promise<void> {
    return this.taskService.delete(createDto);
  }
}
