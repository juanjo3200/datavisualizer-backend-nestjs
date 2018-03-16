import { Get, Post, Put, Delete, Controller, Param , Response, Request, Body} from '@nestjs/common';
import { QueueDBService} from './queuedB.service';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitQuery, ApiImplicitParam, ApiImplicitBody } from '@nestjs/swagger';
import { Database } from '../databases/entities/database.entity';
import { QueueDB } from './entities/queueDB.entity';
@ApiUseTags('queueDB')
@Controller('queueDB')
export class QueueDBController {

    constructor(private queueDBService: QueueDBService){}


    @ApiOperation({ title: 'Obtiene todas las peticiones de base de datos' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @Get('')
    async getAll() {
        return await this.queueDBService.getAll();
    }

    @ApiOperation({ title: 'Obtiene una petición de base de datos por id' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'id', description: 'id de la petición ', required: true })
    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.queueDBService.getById(id);
    }


    @ApiOperation({ title: 'Recupera las peticiones de base de datos de un usuario' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'id', description: 'id del usuario ', required: true })
    @Get('usuario/:usuario')
    async getByUser(@Param('usuario') usuario:string ) {
        return await this.queueDBService.getByUser(usuario);
    }

    @ApiOperation({ title: 'Crea una petición para añadir una base de datos' })
    @ApiResponse({ status: 201, description: 'Operación correcta' })
    @ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @Post('')
    async createDatabase(@Body() database: QueueDB): Promise<void> {
        return await this.queueDBService.create(database);
    }


    @ApiOperation({ title: 'Borra una petición de base de datos' })
    @ApiResponse({ status: 201, description: 'Operación correcta' })
    @ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'id', description: 'id de la petición ', required: true })
    @Delete(':id')
    async deleteDatabase(@Param('id') id: string) {
        return await this.queueDBService.delete(id);
    }


    @ApiOperation({ title: 'Modifica una petición de base de datos' })
    @ApiResponse({ status: 201, description: 'Operación correcta' })
    @ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'id', description: 'id de la petición ', required: true })
    @Put(':id')
    async updateDatabase(@Param('id') id, @Body() database: QueueDB) {
        return await this.queueDBService.update(id, database);
    }




    
}
