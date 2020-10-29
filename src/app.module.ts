import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { DeviceModule } from './modules/device/device.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './database/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/smart';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    MongooseModule.forRoot(MONGO_URI),
    UserModule,
    DeviceModule,
  ],
})
export class AppModule {}
