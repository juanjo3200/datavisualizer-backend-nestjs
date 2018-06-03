
import {CanActivate, ExecutionContext, Guard } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Guard()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) { }

    canActivate(dataOrRequest, context: ExecutionContext): boolean {
        const { parent, handler } = context;
        const roles = this.reflector.get<string[]>('roles', handler);
        if (!roles) {
            return true;
        }
        const user = dataOrRequest.user;
        console.log(roles);
        console.log(user);
        const hasRole = () => !!roles.find((r) => r===user.role);
        return user && user.role && hasRole();
    }
}