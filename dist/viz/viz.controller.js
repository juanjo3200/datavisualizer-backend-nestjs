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
const viz_service_1 = require("./viz.service");
const swagger_1 = require("@nestjs/swagger");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const viz_entity_1 = require("./entities/viz.entity");
let VizController = class VizController {
    constructor(vizService) {
        this.vizService = vizService;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.vizService.getAll();
        });
    }
    getByName(database, query) {
        return __awaiter(this, void 0, void 0, function* () {
            delete query.database;
            return yield this.vizService.getByOpciones(database, query);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.vizService.getById(id);
        });
    }
    createViz(viz) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.vizService.create(viz);
        });
    }
    deleteViz(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.vizService.delete(id);
        });
    }
    updateViz(id, viz) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.vizService.update(id, viz);
        });
    }
};
__decorate([
    swagger_1.ApiOperation({ title: 'Obtiene todas las visualizaciones' }),
    swagger_1.ApiResponse({ status: 200, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    roles_decorator_1.Roles('ADMIN'),
    common_1.Get(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VizController.prototype, "getAll", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Obtiene las visualizaciones con determinadas opciones' }),
    swagger_1.ApiResponse({ status: 200, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    swagger_1.ApiImplicitQuery({ name: 'database', description: 'Array de id de base de datos', required: true }),
    swagger_1.ApiImplicitQuery({ name: 'opciones', description: 'Query con las distintas opciones', required: true }),
    common_1.Get('opciones'),
    __param(0, common_1.Query('database')), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VizController.prototype, "getByName", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Obtiene una visualización por id' }),
    swagger_1.ApiResponse({ status: 200, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    swagger_1.ApiImplicitParam({ name: 'id', description: 'Id de la visualizacion ', required: true }),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VizController.prototype, "getById", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Crea una visualización' }),
    swagger_1.ApiResponse({ status: 201, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    common_1.Post(''),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [viz_entity_1.Viz]),
    __metadata("design:returntype", Promise)
], VizController.prototype, "createViz", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Borra una visualización por id' }),
    swagger_1.ApiResponse({ status: 200, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    swagger_1.ApiImplicitParam({ name: 'id', description: 'Id de la visualizacion ', required: true }),
    roles_decorator_1.Roles('ADMIN'),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VizController.prototype, "deleteViz", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Actualiza una visualización por id' }),
    swagger_1.ApiResponse({ status: 200, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    swagger_1.ApiImplicitParam({ name: 'id', description: 'Id de la visualizacion ', required: true }),
    roles_decorator_1.Roles('ADMIN'),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, viz_entity_1.Viz]),
    __metadata("design:returntype", Promise)
], VizController.prototype, "updateViz", null);
VizController = __decorate([
    swagger_1.ApiUseTags('viz'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.Controller('viz'),
    __metadata("design:paramtypes", [viz_service_1.VizService])
], VizController);
exports.VizController = VizController;
//# sourceMappingURL=viz.controller.js.map