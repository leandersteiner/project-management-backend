import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { SprintController } from './sprint.controller';
import { SprintService } from './sprint.service';
import { sprintProviders } from './sprint.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [SprintController],
  providers: [
    SprintService,
    ...sprintProviders
  ]
})
export class SprintModule {}
