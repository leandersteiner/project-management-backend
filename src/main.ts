import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function bootstrap() {
  mongoose.plugin((schema) => {
    schema.set('toJSON', {
      virtuals: true,
      versionKey: false,
      transform(doc, ret) {
        delete ret._id;
      }
    });
    schema.set('toObject', {
      virtuals: true,
      versionKey: false,
      transform(doc, ret) {
        delete ret._id;
      }
    });
  });
  const app = await NestFactory.create(AppModule);
  await app.listen(8081);
}

bootstrap();
