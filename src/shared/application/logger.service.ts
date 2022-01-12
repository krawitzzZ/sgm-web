import { Injectable } from '@nestjs/common';

import { LoggerInterface } from '../../api/domain/logger.interface';

@Injectable()
export class LoggerService implements LoggerInterface {
    private readonly logger = console;

    public debug(message: string): void {
        this.logger.debug(message);
    }

    public info(message: string): void {
        this.logger.info(message);
    }

    public warning(message: string): void {
        this.logger.warn(message);
    }

    public error(message: string): void {
        this.logger.error(message);
    }

    public withField(): LoggerInterface {
        return this;
    }

    public withFields(): LoggerInterface {
        return this;
    }

    public withException(): LoggerInterface {
        return this;
    }
}
