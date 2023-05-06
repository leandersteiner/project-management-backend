import { Module } from '@nestjs/common';
import { SprintController } from './sprint.controller';
import { SprintService } from './sprint.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sprint } from './sprint.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sprint])],
  controllers: [SprintController],
  providers: [SprintService]
})
export class SprintModule {}
