import { Module, MiddlewaresConsumer, RequestMethod  } from '@nestjs/common';
import { UserModule} from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { URL } from './db/db.config';
import { NestModule } from '@nestjs/common/interfaces';
import { AuthoritationMiddleware } from './common/middlewares/auth.middleware';
import { DataBaseModule } from './databases/database.module';
import { VizModule } from './viz/viz.module';
import { QueueDBModule } from './queueDb/queueDB.module';
import { QueueDB} from './queueDb/entities/queueDB.entity';
import { DatabaseController } from './databases/database.controller';
import { VizController } from './viz/viz.controller';
import { QueueDBController } from './queueDb/queueDB.controller';
@Module({
  imports: [UserModule, DataBaseModule ,VizModule, QueueDBModule, MongooseModule.forRoot(URL)],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(AuthoritationMiddleware).forRoutes(
      { path: 'user/update-user/:email', method: RequestMethod.PUT },
      DatabaseController, VizController, QueueDBController);
  }
}
