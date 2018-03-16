
import { Model, Types } from 'mongoose';
import { Component, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Viz, Option } from './entities/viz.entity';
import { VizSchema } from './schemas/viz.schema';
import { HttpException } from '@nestjs/common';
import { Database } from '../databases/entities/database.entity';
import * as underscore from 'underscore';
@Component()
export class VizService {
    constructor( @InjectModel(VizSchema) private readonly vizModel: Model<Viz> , ) { }

    async getAll() {
        return await this.vizModel.find();
    }

    async create(viz: Viz): Promise<void> {
        const createViz= new this.vizModel(viz);
        return await createViz.save();
    }

    async getById(id) {
        try {
            return await this.vizModel.findById(id);
        } catch (e) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
    }

    async getByOpciones(database, opciones) {
        let arrayOpciones = [];
        Object.keys(opciones).forEach(function (key) {
            arrayOpciones.push({ nombre: key, valor: opciones[key]});
        });   
        let result = [];
        try {
            await this.vizModel.find({databases :database}, (err, vizQuery)=>{
                vizQuery.forEach(viz => {
                    if(JSON.stringify(viz.options) == JSON.stringify(arrayOpciones) ){
                        result= viz;
                    }
                });
            });
            return result;
        } catch (e) {
            console.log(e);
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
    }

    async delete(id) {
        try {
            await this.vizModel.findByIdAndRemove(id);
        } catch (e) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
    }

    async update(id, viz: Viz) {
        try {
            return await this.vizModel.findByIdAndUpdate(id, viz, { new: true });
        } catch (e) {
            throw e;
        }
    }

}