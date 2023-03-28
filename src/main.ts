import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import { AppModule } from './app.module';

function globalMiddleWareOne(req:Request, res:Response,next:NextFunction){
  console.log("first middleware");
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(globalMiddleWareOne)
  await app.listen(3000);
}
bootstrap();
