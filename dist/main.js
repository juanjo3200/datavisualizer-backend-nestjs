"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const path = require("path");
const express = require("express");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.ApplicationModule);
        app.setGlobalPrefix('api');
        app.use('/', express.static(path.join(__dirname + '/../app/')));
        app.use('/*', (req, res) => {
            res.sendFile(path.join(__dirname + '/../app/'));
        });
        const options = new swagger_1.DocumentBuilder()
            .setTitle('API REST DATAVISUALIZER')
            .setBasePath('api')
            .setDescription('API REST de la aplicación datavisualizer')
            .setVersion('1.0')
            .build();
        const document = yield swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup('/doc/api', app, document);
        yield app.listen(3000);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map