"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'datavisualizer_esperoaprobar';
const common_1 = require("@nestjs/common");
let AuthoritationMiddleware = class AuthoritationMiddleware {
    resolve() {
        return (req, res, next) => {
            if (!req.headers.authorization) {
                return res.status(403).send({
                    message: 'La petición no tiene la cabecera de autenticación'
                });
            }
            var token = req.headers.authorization.replace(/['"']+/g, '');
            try {
                var payload = jwt.decode(token, secret);
                if (payload.exp <= moment().unix()) {
                    return res.status(401).send({
                        message: "El token ha expirado"
                    });
                }
            }
            catch (ex) {
                return res.status(404).send({
                    message: 'El token no es válido'
                });
            }
            req.user = payload;
            next();
        };
    }
};
AuthoritationMiddleware = __decorate([
    common_1.Middleware()
], AuthoritationMiddleware);
exports.AuthoritationMiddleware = AuthoritationMiddleware;
//# sourceMappingURL=auth.middleware.js.map