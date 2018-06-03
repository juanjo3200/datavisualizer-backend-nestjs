"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let OptionsSchema = new mongoose.Schema({
    nombre: String,
    valor: String,
}, { _id: false });
exports.VizSchema = mongoose.Schema({
    nombre: String,
    url: String,
    img: { data: Buffer, contentType: String },
    databases: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Database' }],
    options: [OptionsSchema]
});
//# sourceMappingURL=viz.schema.js.map