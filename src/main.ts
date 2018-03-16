import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './app.module';
async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	app.setGlobalPrefix('api');
	const options = new DocumentBuilder()
		.setTitle('API REST DATAVISUALIZER')
		.setBasePath('api')
		.setDescription('API REST de la aplicación datavisualizer')
		.setVersion('1.0')
		.build();
	const document = await SwaggerModule.createDocument(app, options);
	//const modules = app.container.getModules();
	SwaggerModule.setup('/doc/api', app, document);
	await app.listen(3000);

}
bootstrap();
