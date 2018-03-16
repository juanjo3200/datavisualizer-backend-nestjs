

import * as jwt from 'jwt-simple';
import * as moment from 'moment';
var secret = 'datavisualizer_esperoaprobar';

export const createToken = function (user) {

    var payload = {
        sub: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix
    }

    return jwt.encode(payload, secret);

}