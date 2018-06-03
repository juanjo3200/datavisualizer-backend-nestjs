"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UserSchema = mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: String,
    viz: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Viz' }]
});
//# sourceMappingURL=user.schema.js.map