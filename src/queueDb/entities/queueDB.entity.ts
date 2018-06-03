import { ApiModelProperty } from '@nestjs/swagger';

export class QueueDB {
        
    @ApiModelProperty({ type: String })
    nombre: String;

    @ApiModelProperty({ type: String })
    url: String;

    @ApiModelProperty({ type: String })
    descripcion: String;
    
}