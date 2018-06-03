import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './app.module';
import * as path from 'path';
import * as express from 'express';
async function bootstrap() {
	
	const app = await NestFactory.create(ApplicationModule);
	app.setGlobalPrefix('api');
	app.use('/', express.static(path.join(__dirname + '/../dist/')));
	app.use('/*', (req: any, res: any) => {
		res.sendFile(path.join(__dirname + '/../dist/'));
	});

	const options = new DocumentBuilder()
		.setTitle('API REST DATAVISUALIZER')
		.setBasePath('api')
		.setDescription('API REST de la aplicación datavisualizer')
		.setVersion('1.0')
		.build();
	const document = await SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('/doc/api', app, document);
	await app.listen(3000);
}
bootstrap();
