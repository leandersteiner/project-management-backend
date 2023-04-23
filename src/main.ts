import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';
import { useRequestLogging } from './middleware/request-logging';

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
  useRequestLogging(app);
  await app.listen(8081);
}

bootstrap();
