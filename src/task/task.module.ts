import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { taskProviders } from './task.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TaskController],
  providers: [TaskService, ...taskProviders]
})
export class TaskModule {}
