"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jwt-simple");
const moment = require("moment");
var secret = 'datavisualizer_esperoaprobar';
exports.createToken = function (user) {
    var payload = {
        sub: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix
    };
    return jwt.encode(payload, secret);
};
//# sourceMappingURL=jwt.service.js.map