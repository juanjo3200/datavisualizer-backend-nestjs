import { Get, Post, Put, Delete, Controller, Param, Response, Request, Body, UseGuards} from '@nestjs/common';
import { QueueDBService} from './queuedB.service';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitQuery, ApiImplicitParam, ApiImplicitBody } from '@nestjs/swagger';
import { Database } from '../databases/entities/database.entity';
import { QueueDB } from './entities/queueDB.entity';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@ApiUseTags('queueDB')
@Controller('queueDB')
export class QueueDBController {

    constructor(private queueDBService: QueueDBService){}


    @ApiOperation({ title: 'Obtiene todas las peticiones de base de datos' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @Roles('ADMIN')
    @Get('')
    async getAll() {
        return await this.queueDBService.getAll();
    }

    @ApiOperation({ title: 'Obtiene una petición de base de datos por id' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'id', description: 'id de la petición ', required: true })
    @Roles('ADMIN')
    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.queueDBService.getById(id);
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
    @Roles('ADMIN')
    @Delete(':id')
    async deleteDatabase(@Param('id') id: string) {
        return await this.queueDBService.delete(id);
    }


    @ApiOperation({ title: 'Modifica una petición de base de datos' })
    @ApiResponse({ status: 201, description: 'Operación correcta' })
    @ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'id', description: 'id de la petición ', required: true })
    @Roles('ADMIN')
    @Put(':id')
    async updateDatabase(@Param('id') id, @Body() database: QueueDB) {
        return await this.queueDBService.update(id, database);
    }




    
}
