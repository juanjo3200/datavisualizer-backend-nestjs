"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const mongoose_1 = require("@nestjs/mongoose");
const db_config_1 = require("./db/db.config");
const auth_middleware_1 = require("./common/middlewares/auth.middleware");
const database_module_1 = require("./databases/database.module");
const viz_module_1 = require("./viz/viz.module");
const queueDB_module_1 = require("./queueDb/queueDB.module");
const database_controller_1 = require("./databases/database.controller");
const viz_controller_1 = require("./viz/viz.controller");
const queueDB_controller_1 = require("./queueDb/queueDB.controller");
let ApplicationModule = class ApplicationModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthoritationMiddleware).forRoutes({ path: 'user/update-user/:email', method: common_1.RequestMethod.PUT }, database_controller_1.DatabaseController, viz_controller_1.VizController, queueDB_controller_1.QueueDBController);
    }
};
ApplicationModule = __decorate([
    common_1.Module({
        imports: [user_module_1.UserModule, database_module_1.DataBaseModule, viz_module_1.VizModule, queueDB_module_1.QueueDBModule, mongoose_1.MongooseModule.forRoot(db_config_1.URL)],
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=app.module.js.map