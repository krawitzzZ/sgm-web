import { Module } from '@nestjs/common';

import { LoggerService } from './application/logger.service';

@Module({
    imports: [],
    controllers: [],
    providers: [
        {
            provide: 'LoggerInterface',
            useClass: LoggerService,
        },
    ],
    exports: [
        {
            provide: 'LoggerInterface',
            useClass: LoggerService,
        },
    ],
})
export class SharedModule {}
