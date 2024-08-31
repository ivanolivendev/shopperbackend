import { Controller, Post, Body, Get } from '@nestjs/common';
import { ReadingService } from './reading.service';
import { CreateReadingDto } from './dto/create-reading.dto';
import { Reading } from './entities/reading.entity';

@Controller('readings')
export class ReadingController {
  constructor(private readonly readingService: ReadingService) {}

  @Post()
  async create(@Body() createReadingDto: CreateReadingDto): Promise<Reading> {
    return this.readingService.create(createReadingDto);
  }

  @Get()
  async findAll(): Promise<Reading[]> {
    return this.readingService.findAll();
  }
}
