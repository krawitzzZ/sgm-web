import { join } from 'path';
import { promises as fs } from 'fs';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { name, description, version } from '../package.json';
import { bootstrap } from '../src/backend/main';

async function createSwaggerDocs(): Promise<void> {
    const outdir = join(__dirname, 'swagger.json');

    const app = await bootstrap(3099, false);
    const options = new DocumentBuilder()
        .setTitle(name)
        .setDescription(description)
        .setVersion(version)
        .build();
    const document = SwaggerModule.createDocument(app, options);

    await fs.writeFile(outdir, JSON.stringify(document, null, 4));
    // eslint-disable-next-line no-console
    console.log(`Generated swagger documentation and saved to '${outdir}'`);
    await app.close();
}

// eslint-disable-next-line no-console
createSwaggerDocs().catch(console.error);
