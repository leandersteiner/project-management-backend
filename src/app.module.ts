import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TaskStateModule } from './task-state/task-state.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:mongo@db:27017', { dbName: 'mauwss2023' }),
    UserModule,
    TaskStateModule
  ]
})
export class AppModule {
}
