import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    cors: true, // < Habilitando CORS no Nest
  });
// Validation
  app.useGlobalPipes(new ValidationPipe());
// Swagger
  const config = new DocumentBuilder()
    .setTitle('XboxLive')
    .setDescription('Aplicação para gestão de jogos')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('auth')
    .addTag('game')
    .addTag('product')
    .addTag('user')
    .addTag('order')
    .addTag('auth')
    .addBearerAuth()
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

  await app.listen(3333);;
}
bootstrap();
