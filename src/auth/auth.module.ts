import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.stratergy';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule,
    UserModule,JwtModule.register({
      secret: "yamini",
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
  }),
],
providers: [
    AuthService,
    LocalStrategy,JwtStrategy
],
controllers: [AuthController],
})
export class AuthModule {}
