import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { ReqUser } from '../common/helper/user.decorator';
import { User } from '../user/user.entity';
import { TaskCommentService } from './task-comment.service';
import { CreateTaskCommentDto } from './dto/create-task-comment.dto';
import { TaskComment } from './task-comment.entity';
import { UpdateTaskCommentDto } from './dto/update-task-comment.dto';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('tasks/:taskId/comments')
export class TaskCommentController {
  constructor(private readonly taskCommentService: TaskCommentService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('/')
  async create(
    @ReqUser() user: User,
    @Param('taskId') taskId: string,
    @Body() createDto: CreateTaskCommentDto
  ): Promise<TaskComment> {
    return this.taskCommentService.create(user, taskId, createDto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch('/:commentId')
  async update(
    @Param('commentId') commentId: string,
    @Body() updateDto: UpdateTaskCommentDto
  ): Promise<TaskComment> {
    return this.taskCommentService.update(commentId, updateDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':commentId')
  async deleteSubtask(@Param('commentId') commentId: string): Promise<void> {
    console.log(`deleting ${commentId}`);
    return this.taskCommentService.delete(commentId);
  }
}
