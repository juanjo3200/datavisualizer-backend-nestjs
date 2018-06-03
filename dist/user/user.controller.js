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
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("./user.service");
const user_entity_1 = require("./entities/user.entity");
const viz_entity_1 = require("../viz/entities/viz.entity");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getViz(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.getViz(email);
        });
    }
    addViz(email, viz) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.addViz(email, viz);
        });
    }
    deleteVizViz(email, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.deleteViz(email, id);
        });
    }
    checkEmail(res, email) {
        this.userService.checkEmail(res, email);
    }
    register(res, user) {
        this.userService.createUser(res, user);
    }
    login(res, user) {
        this.userService.login(res, user);
    }
    updateUser(req, res, email, user) {
        this.userService.updateUser(res, req, email, user);
    }
};
__decorate([
    swagger_1.ApiOperation({ title: 'Obtiene todas las visualizaciones de un usuario' }),
    swagger_1.ApiResponse({ status: 200, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    swagger_1.ApiImplicitParam({ name: 'email', description: 'Email del usuario ', required: true }),
    common_1.Get('viz/:email'),
    __param(0, common_1.Param('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getViz", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Añade una vizualización al usuario con email :email' }),
    swagger_1.ApiResponse({ status: 201, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    swagger_1.ApiImplicitParam({ name: 'email', description: 'Email del usuario ', required: true }),
    common_1.Post('viz/:email'),
    __param(0, common_1.Param('email')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, viz_entity_1.Viz]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addViz", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Borra una vizualización al usuario con email :email' }),
    swagger_1.ApiResponse({ status: 201, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    swagger_1.ApiImplicitParam({ name: 'email', description: 'Email del usuario ', required: true }),
    swagger_1.ApiImplicitParam({ name: 'id', description: 'Id de la visualizacion ', required: true }),
    common_1.Delete('viz/:email/:id'),
    __param(0, common_1.Param('email')), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteVizViz", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Comprueba si existe un usuario con email , :email' }),
    swagger_1.ApiResponse({ status: 200, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 404, description: 'No existe el usuario' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    swagger_1.ApiImplicitParam({ name: 'email', description: 'Email del usuario ', required: true }),
    common_1.Get('checkemail/:email'),
    __param(0, common_1.Response()), __param(1, common_1.Param('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "checkEmail", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Crea un usuario ' }),
    swagger_1.ApiResponse({ status: 201, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 404, description: 'No se ha podido crear el usuario' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    common_1.Post('register'),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "register", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Logueo de usuario ' }),
    swagger_1.ApiResponse({ status: 200, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 404, description: 'No se ha podido crear un usuario' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    common_1.Post('login'),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "login", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Actualizar un usuario ' }),
    swagger_1.ApiResponse({ status: 200, description: 'Operación correcta' }),
    swagger_1.ApiResponse({ status: 404, description: 'No se ha podido actualizar un usuario' }),
    swagger_1.ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' }),
    swagger_1.ApiImplicitParam({ name: 'email', description: 'Email del usuario ', required: true }),
    common_1.Put('update-user/:email'),
    __param(0, common_1.Request()), __param(1, common_1.Response()), __param(2, common_1.Param('email')), __param(3, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateUser", null);
UserController = __decorate([
    swagger_1.ApiUseTags('user'),
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map