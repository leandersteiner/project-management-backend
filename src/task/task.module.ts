import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskStateController } from './task-state.controller';
import { TaskState } from './task-state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, TaskState])],
  controllers: [TaskController, TaskStateController],
  providers: [TaskService, TaskService]
})
export class TaskModule {}
