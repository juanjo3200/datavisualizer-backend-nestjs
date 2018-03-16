import { Database } from "../../databases/entities/database.entity";
import { ApiModelProperty } from '@nestjs/swagger';

export class Option {
    @ApiModelProperty({ type: String })
    nombre: string;

    @ApiModelProperty({ type: String }) 
    valor: string;

    constructor(nombre, valor) {
        this.nombre = nombre;
        this.valor = valor;
    }
}
export class Viz {
    @ApiModelProperty({ type: String })
    nombre: String;
    @ApiModelProperty({ type: String })
    url: String;
    @ApiModelProperty({ type: String , isArray: true})
    databases: Array<String>;
    @ApiModelProperty({ type: Option , isArray: true })
    options: Array<Option>;
}

