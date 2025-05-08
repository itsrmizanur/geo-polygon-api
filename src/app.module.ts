import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PolygonModule } from './polygon/polygon.module';

@Module({
  imports: [PolygonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
