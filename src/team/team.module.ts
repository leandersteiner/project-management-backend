import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { teamProviders } from './team.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TeamController],
  providers: [
    TeamService,
    ...teamProviders
  ]
})
export class TeamModule {}
