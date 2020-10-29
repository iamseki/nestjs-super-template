import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { DeviceModule } from './modules/device/device.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './database/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), UserModule, DeviceModule]
})
export class AppModule {}
