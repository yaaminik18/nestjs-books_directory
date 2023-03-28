import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserModule } from './user/user.module';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from './auth/auth.module';

@Module({
    controllers:[AppController, CustomerController],
    imports: [UserModule, DatabaseModule, ConfigModule.forRoot({ isGlobal: true }), AuthModule],
    providers: [CustomerService],
})
export class AppModule{}