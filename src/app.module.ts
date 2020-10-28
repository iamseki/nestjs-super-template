import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { DeviceModule } from './modules/device/device.module';

@Module({
  imports: [UserModule, DeviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
