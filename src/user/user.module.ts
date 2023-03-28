import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
//import { UserController } from './user.controller';
import { UserMiddleware } from './user.middleware';
import { usersProviders } from './user.provider';
import { UserService } from './user.service';

@Module({
  //controllers: [UserController],
  providers: [UserService,...usersProviders],
  exports:[UserService]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes('user');
  }
  
}
