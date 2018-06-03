"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const queuedB_service_1 = require("./queuedB.service");
const swagger_1 = require("@nestjs/swagger");
const queueDB_entity_1 = require("./entities/queueDB.entity");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
let QueueDBController = class QueueDBController {
    constructor(queueDBService) {
        this.queueDBService = queueDBService;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.queueDBService.getAll();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.queueDBService.getById(id);
        });
    }
    createDatabase(database) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.queueDBService.create(database);
        });
    }
    deleteDatabase(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.queueDBService.delete(id);
        });
    }
    updateDatabase(id, database) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.queueDBService.update(id, database);
        });
    }
};
__decorate([
    swagger_1.ApiOperation({ title: 'Obtiene todas las peticiones de base de datos' }),
    swagger_1.ApiResponse({ status: 200, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    roles_decorator_1.Roles('ADMIN'),
    common_1.Get(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QueueDBController.prototype, "getAll", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Obtiene una petición de base de datos por id' }),
    swagger_1.ApiResponse({ status: 200, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    swagger_1.ApiImplicitParam({ name: 'id', description: 'id de la petición ', required: true }),
    roles_decorator_1.Roles('ADMIN'),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QueueDBController.prototype, "getById", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Crea una petición para añadir una base de datos' }),
    swagger_1.ApiResponse({ status: 201, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    common_1.Post(''),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [queueDB_entity_1.QueueDB]),
    __metadata("design:returntype", Promise)
], QueueDBController.prototype, "createDatabase", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Borra una petición de base de datos' }),
    swagger_1.ApiResponse({ status: 201, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    swagger_1.ApiImplicitParam({ name: 'id', description: 'id de la petición ', required: true }),
    roles_decorator_1.Roles('ADMIN'),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QueueDBController.prototype, "deleteDatabase", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Modifica una petición de base de datos' }),
    swagger_1.ApiResponse({ status: 201, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    swagger_1.ApiImplicitParam({ name: 'id', description: 'id de la petición ', required: true }),
    roles_decorator_1.Roles('ADMIN'),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, queueDB_entity_1.QueueDB]),
    __metadata("design:returntype", Promise)
], QueueDBController.prototype, "updateDatabase", null);
QueueDBController = __decorate([
    swagger_1.ApiUseTags('queueDB'),
    common_1.Controller('queueDB'),
    __metadata("design:paramtypes", [queuedB_service_1.QueueDBService])
], QueueDBController);
exports.QueueDBController = QueueDBController;
//# sourceMappingURL=queueDB.controller.js.map