import { Model } from 'mongoose';
import { Component, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Database } from './entities/database.entity';
import { DatabaseSchema } from './schemas/database.schema';

@Component()
export class DatabaseService {

    constructor(@InjectModel(DatabaseSchema) private readonly databaseModel: Model<Database>) { }
    
    async getAll() {
        return await this.databaseModel.find();
    }

    async create(dataBase: Database): Promise<void> {
        const createDataBase = new this.databaseModel(dataBase);
        return await createDataBase.save();
    }

    async getById(id) {
        try {
           return await this.databaseModel.findById(id);
        } catch (e) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
    }

    async getByName(name: string) {
        try {
            return await this.databaseModel.findOne({nombre : name});
        } catch (e) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
    }

    async delete(id) {
        try {
            await this.databaseModel.findByIdAndRemove(id);
        } catch (e) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
    }

    async update(id, database: Database){
        try {
            return await this.databaseModel.findByIdAndUpdate(id, database, {new :true}) ;
        } catch (e){
            throw e;
        }
    }

    async getCampos(id){
        let result;
        try {
            await this.databaseModel.findById(id, (err, document) =>{
                result= document.campos;
            });
        } catch (e) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        return result;
    }
    async addCampos(id, campos){
        try {
            return await this.databaseModel.findByIdAndUpdate(id, {$push: {campos :{ $each: campos}}}, { new: true });
        } catch (e) {
            throw e;
        }
    }

    async removeCampo(id, nombreCampo: string){
        try {
            return await this.databaseModel.findByIdAndUpdate(id, { $pull: { campos:{ nombre: "unit" }}  }, { new: true });
        } catch (e) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
    }

}