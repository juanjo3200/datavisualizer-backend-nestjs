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
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const database_schema_1 = require("./schemas/database.schema");
let DatabaseService = class DatabaseService {
    constructor(databaseModel) {
        this.databaseModel = databaseModel;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.databaseModel.find();
        });
    }
    create(dataBase) {
        return __awaiter(this, void 0, void 0, function* () {
            const createDataBase = new this.databaseModel(dataBase);
            return yield createDataBase.save();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.databaseModel.findById(id);
            }
            catch (e) {
                throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
            }
        });
    }
    getByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.databaseModel.findOne({ nombre: name });
            }
            catch (e) {
                throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.databaseModel.findByIdAndRemove(id);
            }
            catch (e) {
                throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
            }
        });
    }
    update(id, database) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.databaseModel.findByIdAndUpdate(id, database, { new: true });
            }
            catch (e) {
                throw e;
            }
        });
    }
    getCampos(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            try {
                yield this.databaseModel.findById(id, (err, document) => {
                    result = document.campos;
                });
            }
            catch (e) {
                throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
            }
            return result;
        });
    }
    addCampos(id, campos) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.databaseModel.findByIdAndUpdate(id, { $push: { campos: { $each: campos } } }, { new: true });
            }
            catch (e) {
                throw e;
            }
        });
    }
    removeCampo(id, nombreCampo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.databaseModel.findByIdAndUpdate(id, { $pull: { campos: { nombre: "unit" } } }, { new: true });
            }
            catch (e) {
                throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
            }
        });
    }
};
DatabaseService = __decorate([
    common_1.Component(),
    __param(0, mongoose_2.InjectModel(database_schema_1.DatabaseSchema)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" && _a || Object])
], DatabaseService);
exports.DatabaseService = DatabaseService;
var _a;
//# sourceMappingURL=database.service.js.map