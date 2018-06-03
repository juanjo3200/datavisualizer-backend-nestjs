
import { Model } from 'mongoose';
import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { UserSchema } from './schemas/user.schema';
import * as bcrypt from 'bcrypt-nodejs';
import * as jwt from '../common/services/jwt.service';
@Component()
export class UserService {
    constructor(@InjectModel(UserSchema) private readonly userModel: Model<User>) { }

    async createUser(res, params) {
        var user = new this.userModel(new User);
        //Retrieve params


        if (params.password && params.name && params.email) {
            user.name = params.name;
            user.email = params.email;
            user.role = 'USER';
            await this.userModel.findOne({ email: user.email.toLowerCase() }, (err, issetUser) => {
                if (err) {
                    res.status(500).send({
                        message: 'Error al guardar el usuario'
                    });
                } else {
                    if (!issetUser) {
                        //Crypt password
                        bcrypt.hash(params.password, null, null, (err, hash) => {
                            user.password = hash;
                            user.save((err, userStored) => {
                                if (err) {
                                    res.status(500).send({
                                        message: 'Error al guardar el usuario'
                                    });
                                } else {
                                    if (!userStored) {
                                        res.status(404).send({
                                            message: 'No se ha registrado el usuario'
                                        });
                                    } else {
                                        userStored = this._deletePrivateInfo(userStored);
                                        res.status(200).send({
                                            user: userStored
                                        });
                                    }
                                }
                            })
                        });
                    } else {
                        res.status(200).send({
                            message: "Ya existe un usuario con ese email"
                        });
                    }

                }
            });

        } else {
            res.status(200).send({
                message: "Introduzca los valores correctamente"
            });
        }
    }
    async login(res, params) {

        var email = params.email;
        var password = params.password
        if (params.password && params.email) {
            await this.userModel.findOne({ email: email.toLowerCase() }, (err, issetUser) => {
                if (err) {
                    res.status(500).send({
                        message: 'Error al comprobar usuario'
                    });
                } else {
                    if (issetUser) {
                        bcrypt.compare(password, issetUser.password, (err, check) => {
                            if (check) {
                                if (params.gettoken) {
                                    res.status(200).send({
                                        token: jwt.createToken(issetUser)
                                    });
                                } else {
                                    issetUser = this._deletePrivateInfo(issetUser);
                                    res.status(200).send({
                                        user: issetUser
                                    });
                                }


                            } else {
                                res.status(404).send({
                                    message: "Contraseña incorrecta"
                                });
                            }
                        });

                    } else {
                        res.status(404).send({
                            message: 'El usuario no existe'
                        });
                    }
                }
            });
        } else {
            res.status(200).send({
                message: "Introduzca correctamente los valores"
            })
        }
    }

    async updateUser(res, req, email, body) {
        var userMail = email;
        var update = body;
        if (userMail != req.user.email) {
            return res.status(500).send({
                message: 'No tienes permiso para actualizar el usuario'
            });
        }
        update.role = req.user.role;
        await this.userModel.findOneAndUpdate({ email: userMail.toLowerCase() }, update, { new: true }, (err, userUpdated) => {
            if (err) {
                res.status(500).send({
                    message: 'Error al actualizar usuario'
                });
            } else {
                if (!userUpdated) {
                    res.status(404).send({
                        message: 'No se ha podido actualizar el usuario'
                    });
                } else {
                    if (update.password) {
                        bcrypt.hash(update.password, null, null, (err, hash) => {
                            userUpdated.password = hash;
                            this.userModel.findByIdAndUpdate(userUpdated._id, userUpdated, { new: true }, (err, userStored) => {
                                if (err) {
                                    res.status(500).send({
                                        message: 'Error al actualizar el usuario'
                                    });
                                } else {
                                    if (!userStored) {
                                        res.status(404).send({
                                            message: 'No se ha actualizado el usuario'
                                        });
                                    } else {
                                        res.status(200).send({
                                            token: jwt.createToken(userStored)
                                        });
                                    }
                                }
                            })
                        });
                    } else {
                        res.status(200).send({ token: jwt.createToken(userUpdated) });
                    }
                }
            }
        });
    }




    async checkEmail(res, email) {
        var userMail = email;
        await this.userModel.findOne({ email: userMail.toLowerCase() }, (err, existMail) => {
            if (err) {
                res.status(404).send({
                    message: 'Error al obtener email'
                })

            } else {
                if (existMail) {
                    res.status(200).send({
                        message: existMail.email
                    })
                } else {
                    res.status(404).send({
                        message: "No existe el email"
                    });
                }


            }
        });
    }

    async getViz(email: string) {
        return await this.userModel.findOne({ email: email.toLowerCase() }, 'viz').populate('viz').exec();

    }

    async addViz(email, vizId) {
        try {
            return await this.userModel.findOneAndUpdate({ email: email.toLowerCase() }, { $push: { viz: vizId } }, { new: true });
        } catch (e) {
            throw e;
        }
    }

    async deleteViz(email, vizId) {
        try {
            return await this.userModel.findOneAndUpdate({ email: email.toLowerCase() }, { $pull: { viz: vizId } }, { new: true });
        } catch (e) {
            throw e;
        }
    }

    private _deletePrivateInfo(user) {
        user.password = undefined;
        user._id = undefined;
        return user;
    }
}