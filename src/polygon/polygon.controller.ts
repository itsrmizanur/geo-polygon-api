import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.polygonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePolygonDto: UpdatePolygonDto) {
    return this.polygonService.update(+id, updatePolygonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.polygonService.remove(+id);
  }
}
