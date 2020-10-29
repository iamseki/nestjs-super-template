import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { DeviceModule } from './modules/device/device.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './config/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { AppController } from './app.controller';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/smart';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    MongooseModule.forRoot(MONGO_URI),
    UserModule,
    DeviceModule,
    AuthModule,
  ],
  controllers: [ AppController]
})
export class AppModule {}
