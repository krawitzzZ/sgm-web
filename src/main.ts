import { INestApplication, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { LoggerInterface } from './api/domain/logger.interface';

export async function bootstrap(port = 3003, run = true): Promise<INestApplication> {
    const app = await NestFactory.create(AppModule);
    const logger = app.get<LoggerInterface>('LoggerInterface');

    app.enableVersioning({
        type: VersioningType.HEADER,
        header: 'x-api-version',
    });

    if (run) {
        await app.listen(port);
    }

    logger.info(`Application is running on: ${await app.getUrl()}`);

    return app;
}

// eslint-disable-next-line no-console
bootstrap().catch(console.error);
