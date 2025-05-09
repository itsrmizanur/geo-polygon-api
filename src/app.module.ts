import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PolygonModule } from './polygon/polygon.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PolygonModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
