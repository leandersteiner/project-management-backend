import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards
} from '@nestjs/common';
import { Task } from './task.entity';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ReqUser } from '../common/helper/user.decorator';
import { User } from '../user/user.entity';
import { SubtaskService } from './subtask.service';
import { CreateSubtaskDto } from './dto/create-subtask.dto';
import { Subtask } from './subtask.entity';
import { UpdateSubtaskDto } from './dto/update-subtask.dto';

@UseGuards(AuthGuard)
@Controller('projects/:projectId')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    private readonly subtaskService: SubtaskService
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get('/tasks')
  async findAll(@Param('/tasks') projectId: string): Promise<Task[]> {
    return this.taskService.allForProject(projectId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/tasks/:taskId')
  async find(@Param('taskId') taskId: string): Promise<Task> {
    return this.taskService.oneForProject(taskId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/board/columns/:columnId/tasks')
  async findAllForColumn(@Param('columnId') columnId: string): Promise<Task[]> {
    return this.taskService.allForColumn(columnId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/board/columns/:columnId/tasks')
  async createInColumn(
    @ReqUser() user: User,
    @Param('columnId') columnId: string,
    @Body() createDto: CreateTaskDto
  ): Promise<Task> {
    return this.taskService.createInColumn(user, columnId, createDto);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/board/columns/:columnId/tasks/:taskId/subtasks')
  async createSubtask(
    @ReqUser() user: User,
    @Param('taskId') taskId: string,
    @Body() createDto: CreateSubtaskDto
  ): Promise<Subtask> {
    return this.subtaskService.create(user, taskId, createDto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch('/tasks/:taskId')
  async update(
    @Param('taskId') taskId: string,
    @Body() updateDto: UpdateTaskDto
  ): Promise<Task> {
    return this.taskService.update(taskId, updateDto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch('/tasks/:taskId/subtasks/:subtaskId')
  async updateSubtask(
    @Param('subtaskId') subtaskId: string,
    @Body() updateDto: UpdateSubtaskDto
  ): Promise<Subtask> {
    return this.subtaskService.update(subtaskId, updateDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/tasks/:taskId')
  async delete(@Param('taskId') taskId: string): Promise<void> {
    return this.taskService.delete(taskId);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/tasks/:taskId/subtasks/:subtaskId')
  async deleteSubtask(@Param('subtaskId') subtaskId: string): Promise<void> {
    return this.taskService.delete(subtaskId);
  }
}
