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
const database_service_1 = require("./database.service");
const swagger_1 = require("@nestjs/swagger");
const database_entity_1 = require("./entities/database.entity");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
let DatabaseController = class DatabaseController {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.databaseService.getAll();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.databaseService.getById(id);
        });
    }
    getByName(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.databaseService.getByName(nombre);
        });
    }
    createDatabase(database) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.databaseService.create(database);
        });
    }
    deleteDatabase(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.databaseService.delete(id);
        });
    }
    updateDatabase(id, database) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.databaseService.update(id, database);
        });
    }
    getCampos(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.databaseService.getCampos(id);
        });
    }
    addCampos(id, campos) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.databaseService.addCampos(id, campos);
        });
    }
    removeCampo(id, campo) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.databaseService.removeCampo(id, campo);
        });
    }
};
__decorate([
    swagger_1.ApiOperation({ title: 'Obtiene todos las bases de datos ' }),
    swagger_1.ApiResponse({ status: 200, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    common_1.Get(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DatabaseController.prototype, "getAll", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Recupera una base de datos por id ' }),
    swagger_1.ApiResponse({ status: 200, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 404, description: 'No se ha encontrado la base de datos' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    swagger_1.ApiImplicitParam({ name: 'id', description: 'Id de la base de datos ', required: true }),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DatabaseController.prototype, "getById", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Recupera una base de datos por su nombre ' }),
    swagger_1.ApiResponse({ status: 200, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 404, description: 'No se ha encontrado la base de datos' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    swagger_1.ApiImplicitParam({ name: 'nombre', description: 'Nombre de la base de datos ', required: true }),
    common_1.Get('/nombre/:nombre'),
    __param(0, common_1.Param('nombre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DatabaseController.prototype, "getByName", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Crea una base de datos' }),
    swagger_1.ApiResponse({ status: 201, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    roles_decorator_1.Roles('ADMIN'),
    common_1.Post(''),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [database_entity_1.Database]),
    __metadata("design:returntype", Promise)
], DatabaseController.prototype, "createDatabase", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Borra una base de datos por id ' }),
    swagger_1.ApiResponse({ status: 200, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 404, description: 'No se ha encontrado la base de datos' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    swagger_1.ApiImplicitParam({ name: 'id', description: 'Id de la base de datos ', required: true }),
    roles_decorator_1.Roles('ADMIN'),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DatabaseController.prototype, "deleteDatabase", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Modifica una base de datos por id ' }),
    swagger_1.ApiResponse({ status: 200, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 404, description: 'No se ha encontrado la base de datos' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    swagger_1.ApiImplicitParam({ name: 'id', description: 'Id de la base de datos ', required: true }),
    roles_decorator_1.Roles('ADMIN'),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, database_entity_1.Database]),
    __metadata("design:returntype", Promise)
], DatabaseController.prototype, "updateDatabase", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Obtiene los campos de una base de datos con id :id ' }),
    swagger_1.ApiResponse({ status: 200, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 404, description: 'No se ha encontrado la base de datos' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    swagger_1.ApiImplicitParam({ name: 'id', description: 'id de la base de datos ', required: true }),
    common_1.Get('/campos/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DatabaseController.prototype, "getCampos", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Añade a la base de datos con id :id  un campo' }),
    swagger_1.ApiResponse({ status: 201, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 404, description: 'No se ha encontrado la base de datos' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    swagger_1.ApiImplicitParam({ name: 'id', description: 'id de la base de datos ', required: true }),
    roles_decorator_1.Roles('ADMIN'),
    common_1.Post('/campos/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body('campos')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, database_entity_1.Field]),
    __metadata("design:returntype", Promise)
], DatabaseController.prototype, "addCampos", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Borra el campo de una base de datos con id :id ' }),
    swagger_1.ApiResponse({ status: 200, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 404, description: 'No se ha encontrado la base de datos' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    swagger_1.ApiImplicitParam({ name: 'id', description: 'id de la base de datos ', required: true }),
    roles_decorator_1.Roles('ADMIN'),
    common_1.Delete('/campos/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Query('campo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], DatabaseController.prototype, "removeCampo", null);
DatabaseController = __decorate([
    swagger_1.ApiUseTags('database'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.Controller('database'),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], DatabaseController);
exports.DatabaseController = DatabaseController;
//# sourceMappingURL=database.controller.js.map