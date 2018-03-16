import * as mongoose from 'mongoose';

export const fieldSchema = new mongoose.Schema({
    nombre: String,
    tipo: String,
});


export const DatabaseSchema = mongoose.Schema({
    nombre: String,
    descripcion: String,
    campos: [fieldSchema]
});

