import { Module } from '@nestjs/common';
import { VizController } from './viz.controller';
import { MongooseModule} from '@nestjs/mongoose';
import {VizSchema} from './schemas/viz.schema';
import {VizService} from './viz.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Viz', schema: VizSchema }])],
    controllers: [VizController],
    components: [VizService],
})
export class VizModule { }
