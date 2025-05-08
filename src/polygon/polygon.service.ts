import { Injectable } from '@nestjs/common';
import { CreatePolygonDto } from './dto/create-polygon.dto';
import { UpdatePolygonDto } from './dto/update-polygon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Polygon } from './entities/polygon.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PolygonService {
  constructor(
    @InjectRepository(Polygon)
    private readonly polygonRepository: Repository<Polygon>,
  ) {}

  async create(createPolygonDto: CreatePolygonDto) {
    return await this.polygonRepository.save(createPolygonDto);
  }

  async findAll() {
    const data = await this.polygonRepository.findAndCount();
    return {
      data: data[0],
    };
  }
}
