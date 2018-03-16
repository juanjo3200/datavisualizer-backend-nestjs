import { Component, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { QueueDB } from './entities/queueDB.entity';
import { QueueDBSchema } from './schemas/queueDB.schema';
import * as bcrypt from 'bcrypt-nodejs';
import * as jwt from '../common/services/jwt.service';
@Component()
export class QueueDBService {
    constructor(@InjectModel(QueueDBSchema) private readonly queueDBModel: Model<QueueDB>) { }

    async getAll() {
        return await this.queueDBModel.find();
    }

    async create(queueDB: QueueDB): Promise<void> {
        const createQueueDB = new this.queueDBModel(queueDB);
        return await createQueueDB.save();
    }

    async getById(id) {
        try {
            return await this.queueDBModel.findById(id);
        } catch (e) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
    }

    async getByUser(user: string) {
        try {
            return await this.queueDBModel.findOne({ usuario: user });
        } catch (e) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
    }

    async delete(id) {
        try {
            await this.queueDBModel.findByIdAndRemove(id);
        } catch (e) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
    }

    async update(id, queueDB: QueueDB) {
        try {
            return await this.queueDBModel.findByIdAndUpdate(id, queueDB, { new: true });
        } catch (e) {
            throw e;
        }
    }

}