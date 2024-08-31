import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Measure } from './entities/measure.entity';
import { CreateMeasureDto } from './dto/create-measure.dto';

@Injectable()
export class MeasureService {
  constructor(
    @InjectRepository(Measure)
    private measureRepository: Repository<Measure>,
  ) {}

  async create(createMeasureDto: CreateMeasureDto): Promise<Measure> {
    const measure = this.measureRepository.create(createMeasureDto);
    return this.measureRepository.save(measure);
  }

  async findAll(): Promise<Measure[]> {
    return this.measureRepository.find();
  }
}