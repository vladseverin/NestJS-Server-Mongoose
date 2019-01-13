import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findById(id);
  }

  @Put(':id')
  async updateOne(@Param('id') id: string, @Body() updateCatDto: CreateCatDto): Promise<object>{
    const idUpdated = await this.catsService.updateOne(id, updateCatDto);
    return { status: 200, succes: 'OK', data: idUpdated }
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<object> {
    const deleted = await this.catsService.deleteOne(id);
    return { status: 200, succes: 'OK', data: deleted }
  }

}
