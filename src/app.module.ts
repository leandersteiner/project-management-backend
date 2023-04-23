import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { TaskStateModule } from './task-state/task-state.module';
import { TeamModule } from './team/team.module';
import { TaskModule } from './task/task.module';
import { SprintModule } from './sprint/sprint.module';
import { ProjectModule } from './project/project.module';
import { BoardColumnModule } from './board-column/board-column.module';
import { BoardModule } from './board/board.module';
import { AuthModule } from './auth/auth.module';
import * as process from 'process';

const MONGO_URL =
  process.env.MONGO_URL || 'mongodb://mongo:mongo@127.0.0.1:27017';
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'mauwss2023';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URL, { dbName: MONGO_DB_NAME }),
    UserModule,
    TaskStateModule,
    TeamModule,
    TaskModule,
    SprintModule,
    ProjectModule,
    BoardColumnModule,
    BoardModule,
    AuthModule
  ]
})
export class AppModule {}
