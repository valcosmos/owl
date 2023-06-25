import { NestFactory } from '@nestjs/core';
import { DevopsModule } from './devops.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(DevopsModule);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  await app.listen(3001);
  console.log('Devops is running on ==> http://localhost:3001');
}
bootstrap();
