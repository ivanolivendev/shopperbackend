import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeasureController } from './measure.controller';
import { MeasureService } from './measure.service';
import { Measure } from './entities/measure.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Measure])],
  controllers: [MeasureController],
  providers: [MeasureService],
})
export class MeasureModule {}