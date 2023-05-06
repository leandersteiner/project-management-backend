import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TaskStateModule } from './task-state/task-state.module';
import { TeamModule } from './team/team.module';
import { TaskModule } from './task/task.module';
import { SprintModule } from './sprint/sprint.module';
import { ProjectModule } from './project/project.module';
import { BoardColumnModule } from './board-column/board-column.module';
import { BoardModule } from './board/board.module';
import { AuthModule } from './auth/auth.module';
import { OrganisationModule } from './organisation/organisation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/helper/env.helper';
import { TypeOrmConfigService } from './common/typeorm/typeorm.service';

const envFilePath = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    UserModule,
    TaskStateModule,
    TeamModule,
    TaskModule,
    SprintModule,
    ProjectModule,
    BoardColumnModule,
    BoardModule,
    AuthModule,
    OrganisationModule
  ]
})
export class AppModule {}
