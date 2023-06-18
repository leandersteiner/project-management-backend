import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { TaskStateService } from './task-state.service';
import { ReqUser } from '../common/helper/user.decorator';
import { User } from '../user/user.entity';
import { CreateTaskStateDto } from './dto/create-task-state.dto';
import { TaskState } from './task-state.entity';

@Controller('projects/:projectId')
export class TaskStateController {
  constructor(private readonly taskStateService: TaskStateService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('/tasks/states')
  async createTaskState(
    @ReqUser() user: User,
    @Body() createDto: CreateTaskStateDto
  ): Promise<TaskState> {
    return this.taskStateService.create(createDto);
  }
}
