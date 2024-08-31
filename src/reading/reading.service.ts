import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reading } from './entities/reading.entity';
import { CreateReadingDto } from './dto/create-reading.dto';

@Injectable()
export class ReadingService {
  constructor(
    @InjectRepository(Reading)
    private readingRepository: Repository<Reading>,
  ) {}

  async create(createReadingDto: CreateReadingDto): Promise<Reading> {
    const reading = this.readingRepository.create(createReadingDto);
    return this.readingRepository.save(reading);
  }

  async findAll(): Promise<Reading[]> {
    return this.readingRepository.find();
  }
}
