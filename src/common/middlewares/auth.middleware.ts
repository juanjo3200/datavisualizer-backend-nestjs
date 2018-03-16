var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'datavisualizer_esperoaprobar';
import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';

@Middleware()
export class AuthoritationMiddleware implements NestMiddleware {
    resolve(): ExpressMiddleware {
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
            } catch (ex) {
                return res.status(404).send({
                    message: 'El token no es válido'
                });
            }
            req.user = payload;
        };
    }
}