import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskStateController } from './task-state.controller';
import { TaskState } from './task-state.entity';
import { Subtask } from './subtask.entity';
import { TaskStateService } from './task-state.service';
import { SubtaskService } from './subtask.service';
import { UserModule } from 'src/user/user.module';
import { SubtaskController } from './subtask.controller';
import { TaskCommentController } from './task-comment.controller';
import { TaskCommentService } from './task-comment.service';
import { TaskComment } from './task-comment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task, TaskState, Subtask, TaskComment]),
    UserModule
  ],
  controllers: [
    TaskController,
    TaskStateController,
    SubtaskController,
    TaskCommentController
  ],
  providers: [
    TaskService,
    TaskStateService,
    SubtaskService,
    TaskCommentService
  ],
  exports: [TaskStateService]
})
export class TaskModule {}
