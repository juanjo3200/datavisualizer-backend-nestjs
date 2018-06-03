"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.fieldSchema = new mongoose.Schema({
    nombre: String,
    tipo: String,
});
exports.DatabaseSchema = mongoose.Schema({
    nombre: String,
    descripcion: String,
    campos: [exports.fieldSchema]
});
//# sourceMappingURL=database.schema.js.map