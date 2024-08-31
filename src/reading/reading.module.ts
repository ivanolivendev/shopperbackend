import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReadingController } from './reading.controller';
import { ReadingService } from './reading.service';
import { Reading } from './entities/reading.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reading])],
  controllers: [ReadingController],
  providers: [ReadingService],
})
export class ReadingModule {}