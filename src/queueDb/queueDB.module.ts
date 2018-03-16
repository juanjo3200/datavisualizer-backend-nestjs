import { Module } from '@nestjs/common';
import { QueueDBController } from './queueDB.controller';
import { MongooseModule} from '@nestjs/mongoose';
import {QueueDBSchema} from './schemas/queueDB.schema';
import {QueueDBService} from './queueDB.service';
@Module({
    imports: [MongooseModule.forFeature([{ name: 'queueDB', schema: QueueDBSchema }])],
    controllers: [QueueDBController],
    components: [QueueDBService],
})
export class QueueDBModule { }
