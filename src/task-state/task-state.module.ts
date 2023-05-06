import { Module } from '@nestjs/common';
import { TaskStateController } from './task-state.controller';
import { TaskStateService } from './task-state.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskState } from './task-state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskState])],
  controllers: [TaskStateController],
  providers: [TaskStateService]
})
export class TaskStateModule {}
