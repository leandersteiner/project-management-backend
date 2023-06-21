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
import { SubtaskService } from './subtask.service';
import { CreateSubtaskDto } from './dto/create-subtask.dto';
import { Subtask } from './subtask.entity';
import { UpdateSubtaskDto } from './dto/update-subtask.dto';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('tasks/:taskId/subtasks')
export class SubtaskController {
  constructor(private readonly subtaskService: SubtaskService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('/')
  async create(
    @ReqUser() user: User,
    @Param('taskId') taskId: string,
    @Body() createDto: CreateSubtaskDto
  ): Promise<Subtask> {
    return this.subtaskService.create(user, taskId, createDto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch('/:subtaskId')
  async update(
    @Param('subtaskId') subtaskId: string,
    @Body() updateDto: UpdateSubtaskDto
  ): Promise<Subtask> {
    return this.subtaskService.update(subtaskId, updateDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':subtaskId')
  async deleteSubtask(@Param('subtaskId') subtaskId: string): Promise<void> {
    return this.subtaskService.delete(subtaskId);
  }
}
