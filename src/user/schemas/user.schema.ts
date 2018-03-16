import * as mongoose from 'mongoose';


export const UserSchema = mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: String,
    viz: [{type: mongoose.Schema.Types.ObjectId , ref: 'Viz'}]
});

