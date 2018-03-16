import * as mongoose from 'mongoose';

let OptionsSchema = new mongoose.Schema({
    nombre: String,
    valor: String,
}, { _id: false });


export const VizSchema = mongoose.Schema({
    nombre: String,
    url: String,
    databases: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Database' }],
    options: [OptionsSchema]
});

