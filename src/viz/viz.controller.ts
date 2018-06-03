import { Get, Post, Put, Delete, Controller, Param, Response, Request, Body, Query, UseGuards } from '@nestjs/common';
import { VizService } from './viz.service';
import {
    ApiUseTags,
    ApiResponse,
    ApiOperation,
    ApiImplicitQuery,
    ApiImplicitParam
} from '@nestjs/swagger';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Viz } from './entities/viz.entity';


@ApiUseTags('viz')
@UseGuards(RolesGuard)
@Controller('viz')
export class VizController {


    constructor(private vizService: VizService) { }

    @ApiOperation({ title: 'Obtiene todas las visualizaciones' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @Roles('ADMIN')
    @Get('')
    async getAll() {
        return await this.vizService.getAll();
    }

    @ApiOperation({ title: 'Obtiene las visualizaciones con determinadas opciones' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitQuery({ name: 'database', description: 'Array de id de base de datos', required: true })
    @ApiImplicitQuery({ name: 'opciones', description: 'Query con las distintas opciones', required: true })
    @Get('opciones')
    async getByName(@Query('database') database, @Query() query) {
        delete query.database;
        return await this.vizService.getByOpciones(database, query);
    }


    @ApiOperation({ title: 'Obtiene una visualización por id' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'id', description: 'Id de la visualizacion ', required: true })
    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.vizService.getById(id);
    }

    @ApiOperation({ title: 'Crea una visualización' })
    @ApiResponse({ status: 201, description: 'Operación correcta' })
    @ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @Post('')
    async createViz(@Body() viz: Viz): Promise<void> {
        return await this.vizService.create(viz);
    }

    @ApiOperation({ title: 'Borra una visualización por id' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'id', description: 'Id de la visualizacion ', required: true })
    @Roles('ADMIN')
    @Delete(':id')
    async deleteViz(@Param('id') id: string) {
        return await this.vizService.delete(id);
    }


    @ApiOperation({ title: 'Actualiza una visualización por id' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'id', description: 'Id de la visualizacion ', required: true })
    @Roles('ADMIN')
    @Put(':id')
    async updateViz(@Param('id') id, @Body() viz: Viz) {
        return this.vizService.update(id, viz);
    }


}
