import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TaskStateController } from './task-state.controller';
import { TaskStateService } from './task-state.service';
import { taskStateProviders } from './task-state.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TaskStateController],
  providers: [
    TaskStateService,
    ...taskStateProviders
  ]
})
export class TaskStateModule {}
