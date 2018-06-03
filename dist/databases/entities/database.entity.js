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
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
class Field {
}
__decorate([
    swagger_1.ApiModelProperty({ type: String }),
    __metadata("design:type", String)
], Field.prototype, "nombre", void 0);
__decorate([
    swagger_1.ApiModelProperty({ type: String }),
    __metadata("design:type", String)
], Field.prototype, "tipo", void 0);
exports.Field = Field;
class Database {
}
__decorate([
    swagger_1.ApiModelProperty({ type: String }),
    __metadata("design:type", String)
], Database.prototype, "nombre", void 0);
__decorate([
    swagger_1.ApiModelProperty({ type: String }),
    __metadata("design:type", String)
], Database.prototype, "descripcion", void 0);
__decorate([
    swagger_1.ApiModelProperty({ type: Field, isArray: true }),
    __metadata("design:type", Array)
], Database.prototype, "campos", void 0);
exports.Database = Database;
//# sourceMappingURL=database.entity.js.map