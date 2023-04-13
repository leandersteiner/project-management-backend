import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './project.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }])
  ],
  controllers: [ProjectModule],
  providers: [ProjectService]
})
export class ProjectModule {}
