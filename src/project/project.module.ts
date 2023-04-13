import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProjectService } from './project.service';
import { projectProviders } from './project.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProjectModule],
  providers: [ProjectService, ...projectProviders]
})
export class ProjectModule {}
