import { ApiModelProperty } from '@nestjs/swagger';



export class Field {
    @ApiModelProperty({ type: String })
    nombre: string;
    @ApiModelProperty({ type: String })
    tipo: string;
}
export class Database {
    @ApiModelProperty({ type: String })
    nombre: string;
    @ApiModelProperty({ type: String })
    descripcion: string;
    @ApiModelProperty({ type: Field , isArray: true})
    campos: Array<Field>;
}
