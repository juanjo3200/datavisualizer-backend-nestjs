import { Module } from '@nestjs/common';
import { DatabaseController } from './database.controller';
import { MongooseModule} from '@nestjs/mongoose';
import {DatabaseSchema} from './schemas/database.schema';
import {DatabaseService} from './database.service';
@Module({
    imports: [MongooseModule.forFeature([{ name: 'Database', schema: DatabaseSchema }])],
    controllers: [DatabaseController],
    components: [DatabaseService]
})
export class DataBaseModule { }
