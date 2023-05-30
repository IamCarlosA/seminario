import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(
    morgan(
      ':remote-addr - [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]',
    ),
  );
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('/api');
  const configService = app.get<ConfigService>(ConfigService);
  await app.listen(configService.get('PORT') || 3000);
}
bootstrap();
