import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';
import { TeamService } from './team/team.service';
import { ProjectService } from './project/project.service';
import { BoardService } from './board/board.service';
import { BoardColumnService } from './board-column/board-column.service';
import { TaskStateService } from './task-state/task-state.service';
import { TaskService } from './task/task.service';
import { SprintService } from './sprint/sprint.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, PrismaService, UserService, TeamService, ProjectService, BoardService, BoardColumnService, TaskStateService, TaskService, SprintService],
})
export class AppModule {}
