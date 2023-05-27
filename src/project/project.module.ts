import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { UserModule } from '../user/user.module';
import { TeamService } from '../team/team.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project]), UserModule, TeamService],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
