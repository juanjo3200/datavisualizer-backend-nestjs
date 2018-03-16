import { Get, Post, Put, Controller, Param , Response, Request, Body} from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitQuery, ApiImplicitParam, ApiImplicitBody } from '@nestjs/swagger';
import { UserService} from './user.service';
import { User} from './entities/user.entity';
import { Viz } from '../viz/entities/viz.entity';
@ApiUseTags('user')
@Controller('user')
export class UserController {


    constructor(private userService: UserService){}

    
    @ApiOperation({ title: 'Obtiene todas las visualizaciones de un usuario' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'email', description: 'Email del usuario ', required: true })
    @Get('viz/:email')
    async getViz(@Param('email') email: string) : Promise<User> {
        return await this.userService.getViz(email);
    }

    @ApiOperation({ title: 'Añade una vizualización al usuario con email :email' })
    @ApiResponse({ status: 201, description: 'Operación correcta' })
    @ApiResponse({ status: 401, description: 'Operación no permitida para el usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'email', description: 'Email del usuario ', required: true })
    @Post('viz/:email')
    async addViz(@Param('email') email :string, @Body() viz: Viz)  {
        return await this.userService.addViz(email, viz);
    }


    @ApiOperation({ title: 'Comprueba si existe un usuario con email , :email' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 404, description: 'No existe el usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'email', description: 'Email del usuario ', required: true })
    @Get('checkemail/:email')
    checkEmail(@Response() res, @Param('email') email :string) {
        this.userService.checkEmail(res ,email);
    }


    @ApiOperation({ title: 'Crea un usuario ' })
    @ApiResponse({ status: 201, description: 'Operación correcta' })
    @ApiResponse({ status: 404, description: 'No se ha podido crear el usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @Post('register')
    register(@Response() res, @Body() user: User){
        this.userService.createUser(res, user);
    }


    @ApiOperation({ title: 'Logueo de usuario ' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 404, description: 'No se ha podido crear un usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @Post('login')
    login( @Response() res, @Body() user:User) {
        this.userService.login(res, user);
    }
    
    @ApiOperation({ title: 'Logueo de usuario ' })
    @ApiResponse({ status: 200, description: 'Operación correcta' })
    @ApiResponse({ status: 404, description: 'No se ha podido actualizar un usuario' })
    @ApiResponse({ status: 500, description: 'Error en los parámetros de entrada' })
    @ApiImplicitParam({ name: 'email', description: 'Email del usuario ', required: true })
    @Put('update-user/:email')
    updateUser(@Request() req, @Response() res, @Param('email') email : string, @Body() user:User){
        this.userService.updateUser(res, req, email, user);
    }


}
