import { MeasureService } from './measure.service';
import { CreateMeasureDto } from './dto/create-measure.dto';
import { UpdateMeasureDto } from './dto/update-measure.dto';
export declare class MeasureController {
    private readonly measureService;
    constructor(measureService: MeasureService);
    create(createMeasureDto: CreateMeasureDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMeasureDto: UpdateMeasureDto): string;
    remove(id: string): string;
}
