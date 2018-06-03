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
const user_entity_1 = require("./entities/user.entity");
const user_schema_1 = require("./schemas/user.schema");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("../common/services/jwt.service");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    createUser(res, params) {
        return __awaiter(this, void 0, void 0, function* () {
            var user = new this.userModel(new user_entity_1.User);
            if (params.password && params.name && params.email) {
                user.name = params.name;
                user.email = params.email;
                user.role = 'USER';
                yield this.userModel.findOne({ email: user.email.toLowerCase() }, (err, issetUser) => {
                    if (err) {
                        res.status(500).send({
                            message: 'Error al guardar el usuario'
                        });
                    }
                    else {
                        if (!issetUser) {
                            bcrypt.hash(params.password, null, null, (err, hash) => {
                                user.password = hash;
                                user.save((err, userStored) => {
                                    if (err) {
                                        res.status(500).send({
                                            message: 'Error al guardar el usuario'
                                        });
                                    }
                                    else {
                                        if (!userStored) {
                                            res.status(404).send({
                                                message: 'No se ha registrado el usuario'
                                            });
                                        }
                                        else {
                                            userStored = this._deletePrivateInfo(userStored);
                                            res.status(200).send({
                                                user: userStored
                                            });
                                        }
                                    }
                                });
                            });
                        }
                        else {
                            res.status(200).send({
                                message: "Ya existe un usuario con ese email"
                            });
                        }
                    }
                });
            }
            else {
                res.status(200).send({
                    message: "Introduzca los valores correctamente"
                });
            }
        });
    }
    login(res, params) {
        return __awaiter(this, void 0, void 0, function* () {
            var email = params.email;
            var password = params.password;
            if (params.password && params.email) {
                yield this.userModel.findOne({ email: email.toLowerCase() }, (err, issetUser) => {
                    if (err) {
                        res.status(500).send({
                            message: 'Error al comprobar usuario'
                        });
                    }
                    else {
                        if (issetUser) {
                            bcrypt.compare(password, issetUser.password, (err, check) => {
                                if (check) {
                                    if (params.gettoken) {
                                        res.status(200).send({
                                            token: jwt.createToken(issetUser)
                                        });
                                    }
                                    else {
                                        issetUser = this._deletePrivateInfo(issetUser);
                                        res.status(200).send({
                                            user: issetUser
                                        });
                                    }
                                }
                                else {
                                    res.status(404).send({
                                        message: "Contraseña incorrecta"
                                    });
                                }
                            });
                        }
                        else {
                            res.status(404).send({
                                message: 'El usuario no existe'
                            });
                        }
                    }
                });
            }
            else {
                res.status(200).send({
                    message: "Introduzca correctamente los valores"
                });
            }
        });
    }
    updateUser(res, req, email, body) {
        return __awaiter(this, void 0, void 0, function* () {
            var userMail = email;
            var update = body;
            if (userMail != req.user.email) {
                return res.status(500).send({
                    message: 'No tienes permiso para actualizar el usuario'
                });
            }
            update.role = req.user.role;
            yield this.userModel.findOneAndUpdate({ email: userMail.toLowerCase() }, update, { new: true }, (err, userUpdated) => {
                if (err) {
                    res.status(500).send({
                        message: 'Error al actualizar usuario'
                    });
                }
                else {
                    if (!userUpdated) {
                        res.status(404).send({
                            message: 'No se ha podido actualizar el usuario'
                        });
                    }
                    else {
                        if (update.password) {
                            bcrypt.hash(update.password, null, null, (err, hash) => {
                                userUpdated.password = hash;
                                this.userModel.findByIdAndUpdate(userUpdated._id, userUpdated, { new: true }, (err, userStored) => {
                                    if (err) {
                                        res.status(500).send({
                                            message: 'Error al actualizar el usuario'
                                        });
                                    }
                                    else {
                                        if (!userStored) {
                                            res.status(404).send({
                                                message: 'No se ha actualizado el usuario'
                                            });
                                        }
                                        else {
                                            res.status(200).send({
                                                token: jwt.createToken(userStored)
                                            });
                                        }
                                    }
                                });
                            });
                        }
                        else {
                            res.status(200).send({ token: jwt.createToken(userUpdated) });
                        }
                    }
                }
            });
        });
    }
    checkEmail(res, email) {
        return __awaiter(this, void 0, void 0, function* () {
            var userMail = email;
            yield this.userModel.findOne({ email: userMail.toLowerCase() }, (err, existMail) => {
                if (err) {
                    res.status(404).send({
                        message: 'Error al obtener email'
                    });
                }
                else {
                    if (existMail) {
                        res.status(200).send({
                            message: existMail.email
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "No existe el email"
                        });
                    }
                }
            });
        });
    }
    getViz(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.findOne({ email: email.toLowerCase() }, 'viz').populate('viz').exec();
        });
    }
    addViz(email, vizId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.userModel.findOneAndUpdate({ email: email.toLowerCase() }, { $push: { viz: vizId } }, { new: true });
            }
            catch (e) {
                throw e;
            }
        });
    }
    deleteViz(email, vizId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.userModel.findOneAndUpdate({ email: email.toLowerCase() }, { $pull: { viz: vizId } }, { new: true });
            }
            catch (e) {
                throw e;
            }
        });
    }
    _deletePrivateInfo(user) {
        user.password = undefined;
        user._id = undefined;
        return user;
    }
};
UserService = __decorate([
    common_1.Component(),
    __param(0, mongoose_2.InjectModel(user_schema_1.UserSchema)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" && _a || Object])
], UserService);
exports.UserService = UserService;
var _a;
//# sourceMappingURL=user.service.js.map