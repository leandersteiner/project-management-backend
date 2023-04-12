import { Module } from '@nestjs/common';
import { TaskStateController } from './task-state.controller';
import { TaskStateService } from './task-state.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskState, TaskStateSchema } from './task-state.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: TaskState.name, schema: TaskStateSchema }])],
  controllers: [TaskStateController],
  providers: [TaskStateService]
})
export class TaskStateModule {
}
