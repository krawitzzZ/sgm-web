import { Controller, Get, Inject, Version } from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { LoggerInterface } from '../domain/logger.interface';

@Controller('api/auth')
export class AuthController {
    private readonly response = 'ok';

    public constructor(@Inject('LoggerInterface') private readonly logger: LoggerInterface) {}

    @ApiOperation({ description: 'Authenticate current user and generate JWT' })
    @ApiResponse({ status: 200, description: 'Successfuly logged in', type: String })
    @ApiResponse({ status: 400, description: 'Bad request' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    @ApiHeader({ name: 'x-api-version', required: true })
    @Version('v1')
    @Get('login')
    public async login(): Promise<string> {
        this.logger.info('handling login');

        return this.response;
    }
}
