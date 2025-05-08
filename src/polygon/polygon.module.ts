import { Module } from '@nestjs/common';
import { PolygonService } from './polygon.service';
import { PolygonController } from './polygon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Polygon } from './entities/polygon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Polygon])],
  controllers: [PolygonController],
  providers: [PolygonService],
})
export class PolygonModule {}
