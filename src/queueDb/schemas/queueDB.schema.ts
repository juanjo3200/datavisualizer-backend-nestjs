import * as mongoose from 'mongoose';



export const QueueDBSchema = mongoose.Schema({
    nombre: String,
    url: String,
    descripcion: String,
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});
