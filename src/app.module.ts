import { join } from 'path';

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { ApiModule } from './api/api.module';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, 'public'),
            serveRoot: '',
            exclude: ['/api/**'],
        }),
        ApiModule,
    ],
})
export class AppModule {}
