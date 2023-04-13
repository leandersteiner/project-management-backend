import { Body, Delete, Get, Param, Post } from '@nestjs/common';
import { BaseService } from './base.service';

export class BaseController<DataModel, CreateDto, UpdateDto> {
  constructor(
    private readonly service: BaseService<DataModel, CreateDto, UpdateDto>
  ) {}

  @Get()
  async getAll(): Promise<DataModel[]> {
    return this.service.all({});
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<DataModel> {
    return this.service.find(id);
  }

  @Post()
  async create(@Body() createDto: CreateDto): Promise<DataModel> {
    return this.service.create(createDto);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<DataModel> {
    return this.service.delete(id);
  }
}
