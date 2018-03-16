import { Get, Post, Put, Delete, Controller, Param , Response, Request, Body, Query} from '@nestjs/common';
import { DatabaseService} from './database.service';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitQuery, ApiImplicitParam, ApiImplicitBody } from '@nestjs/swagger';
import { Database, Field } from './entities/database.entity';
@ApiUseTags('database')
@Controller('database')
export class DatabaseController {

    constructor(private databaseService: DatabaseService){}

    @ApiOperation({ title: 'Obtiene todos las bases de datos ' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @Get('')
    async getAll(){
        return await this.databaseService.getAll();
    }
    
    @ApiOperation({ title: 'Recupera una base de datos por id ' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 404, description: 'No se ha encontrado la base de datos' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'id', description: 'Id de la base de datos ', required: true })
    @Get(':id')
    async getById(@Param('id') id : string ) {
        return await  this.databaseService.getById(id);
    }

    @ApiOperation({ title: 'Recupera una base de datos por su nombre ' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 404, description: 'No se ha encontrado la base de datos' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'nombre', description: 'Nombre de la base de datos ', required: true })
    @Get('/nombre/:nombre')
    async getByName(@Param('nombre') nombre: string){
        return await this.databaseService.getByName(nombre);
    }

    @ApiOperation({ title: 'Crea una base de datos una base de datos ' })
    @ApiResponse({ status: 201, description: 'Operación correcta' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @Post('')
    async createDatabase(@Body() database : Database): Promise<void>{
        return await  this.databaseService.create(database);
    }

    @ApiOperation({ title: 'Borra una base de datos por id ' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 404, description: 'No se ha encontrado la base de datos' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'id', description: 'Id de la base de datos ', required: true })
    @Delete(':id')
    async deleteDatabase(@Param('id') id: string) {
        return await this.databaseService.delete(id);
    }


    @ApiOperation({ title: 'Modifica una base de datos por id ' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 404, description: 'No se ha encontrado la base de datos' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'id', description: 'Id de la base de datos ', required: true })
    @Put(':id')
    async updateDatabase(@Param('id') id: string, @Body() database : Database){
        return await this.databaseService.update(id, database);
    }


    @ApiOperation({ title: 'Obtiene los campos de una base de datos con id :id ' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 404, description: 'No se ha encontrado la base de datos' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'id', description: 'id de la base de datos ', required: true })
    @Get('/campos/:id')
    async getCampos(@Param('id') id : string) {
        return await this.databaseService.getCampos(id);
    }

    @ApiOperation({ title: 'Añade a la base de datos con id :id  un campo' })
    @ApiResponse({ status: 201, description: 'Operación correcta' })
    @ApiResponse({ status: 404, description: 'No se ha encontrado la base de datos' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'id', description: 'id de la base de datos ', required: true })
    @Post('/campos/:id')
    async addCampos(@Param('id') id :string, @Body('campos') campos: Field): Promise<void> {
        return await this.databaseService.addCampos(id, campos);
    }

    @ApiOperation({ title: 'Borra e campo de una base de datos con id :id ' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 404, description: 'No se ha encontrado la base de datos' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'id', description: 'id de la base de datos ', required: true })
    @Delete('/campos/:id')
    async removeCampo(@Param('id') id : string , @Query('campo') campo: string) {
        return await this.databaseService.removeCampo(id, campo);
    }


}
