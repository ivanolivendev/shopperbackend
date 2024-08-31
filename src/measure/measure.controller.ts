import { Controller, Post, Body, Get } from '@nestjs/common';
import { MeasureService } from './measure.service';
import { CreateMeasureDto } from './dto/create-measure.dto';
import { Measure } from './entities/measure.entity';

@Controller('measures')
export class MeasureController {
  constructor(private readonly measureService: MeasureService) {}

  @Post()
  async create(@Body() createMeasureDto: CreateMeasureDto): Promise<Measure> {
    return this.measureService.create(createMeasureDto);
  }

  @Get()
  async findAll(): Promise<Measure[]> {
    return this.measureService.findAll();
  }
}
