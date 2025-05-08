import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PolygonService } from './polygon.service';
import { CreatePolygonDto } from './dto/create-polygon.dto';
import { UpdatePolygonDto } from './dto/update-polygon.dto';

@Controller('polygon')
export class PolygonController {
  constructor(private readonly polygonService: PolygonService) {}

  @Post()
  create(@Body() createPolygonDto: CreatePolygonDto) {
    return this.polygonService.create(createPolygonDto);
  }

  @Get()
  findAll() {
    return this.polygonService.findAll();
  }
}
