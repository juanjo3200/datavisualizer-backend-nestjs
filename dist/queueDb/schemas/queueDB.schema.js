"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.QueueDBSchema = mongoose.Schema({
    nombre: String,
    url: String,
    descripcion: String,
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});
//# sourceMappingURL=queueDB.schema.js.map