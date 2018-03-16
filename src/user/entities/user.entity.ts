import { ApiModelProperty } from '@nestjs/swagger';

export class User {
    @ApiModelProperty({ type: String })
    name: String;

    @ApiModelProperty({ type: String })
    email: String;
    @ApiModelProperty({ type: String })
    password: String;

    @ApiModelProperty({ type: String })
    role: String;
    
    @ApiModelProperty({ type: String, isArray: true })
    viz: String[];
}