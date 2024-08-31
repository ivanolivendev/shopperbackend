"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasureService = void 0;
const common_1 = require("@nestjs/common");
let MeasureService = class MeasureService {
    create(createMeasureDto) {
        return 'This action adds a new measure';
    }
    findAll() {
        return `This action returns all measure`;
    }
    findOne(id) {
        return `This action returns a #${id} measure`;
    }
    update(id, updateMeasureDto) {
        return `This action updates a #${id} measure`;
    }
    remove(id) {
        return `This action removes a #${id} measure`;
    }
};
exports.MeasureService = MeasureService;
exports.MeasureService = MeasureService = __decorate([
    (0, common_1.Injectable)()
], MeasureService);
//# sourceMappingURL=measure.service.js.map