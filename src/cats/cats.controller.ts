import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(201)
  create(): string {
    return 'this adds a new cat...';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'this returns cats...';
  }
  @Get('/*')
  showAll(@Req() request: Request): string {
    return 'this returns all the cats...';
  }
  
}
