import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TaskStateModule } from './task-state/task-state.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as process from 'process';

const MONGO_URL = process.env.MONGO_URL || 'mongodb://mongo:mongo@db:27017';
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'mauwss2023';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URL, { dbName: MONGO_DB_NAME }),
    UserModule,
    TaskStateModule
  ]
})
export class AppModule {}
