"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const queueDB_controller_1 = require("./queueDB.controller");
const mongoose_1 = require("@nestjs/mongoose");
const queueDB_schema_1 = require("./schemas/queueDB.schema");
const queueDB_service_1 = require("./queueDB.service");
let QueueDBModule = class QueueDBModule {
};
QueueDBModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'queueDB', schema: queueDB_schema_1.QueueDBSchema }])],
        controllers: [queueDB_controller_1.QueueDBController],
        components: [queueDB_service_1.QueueDBService],
    })
], QueueDBModule);
exports.QueueDBModule = QueueDBModule;
//# sourceMappingURL=queueDB.module.js.map