import { CreateMeasureDto } from './dto/create-measure.dto';
import { UpdateMeasureDto } from './dto/update-measure.dto';
export declare class MeasureService {
    create(createMeasureDto: CreateMeasureDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMeasureDto: UpdateMeasureDto): string;
    remove(id: number): string;
}
