import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';
import helmet from 'helmet';
import { useRequestLogging } from './common/request-logging';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  mongoose.plugin((schema) => {
    schema.set('toJSON', {
      virtuals: true,
      versionKey: false,
      transform(doc, ret) {
        delete ret._id;
        delete ret.password;
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
  app.use(helmet());
  app.enableCors();
  useRequestLogging(app);
  const config = new DocumentBuilder()
    .setTitle('Project Management')
    .setDescription('Description')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(8081);
}

bootstrap();
