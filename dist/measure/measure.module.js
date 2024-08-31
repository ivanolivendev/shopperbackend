"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasureModule = void 0;
const common_1 = require("@nestjs/common");
const measure_service_1 = require("./measure.service");
const measure_controller_1 = require("./measure.controller");
let MeasureModule = class MeasureModule {
};
exports.MeasureModule = MeasureModule;
exports.MeasureModule = MeasureModule = __decorate([
    (0, common_1.Module)({
        controllers: [measure_controller_1.MeasureController],
        providers: [measure_service_1.MeasureService],
    })
], MeasureModule);
//# sourceMappingURL=measure.module.js.map