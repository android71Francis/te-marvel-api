import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import routes from './routes';

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.init();
    }

    public init(): void {
        // initialize all domain routes
        this.app.use('/api', routes());

        // API documentations 
        if (['development'].includes(process.env.NODE_ENV || 'development')) {
            const swaggerDocument = YAML.load(`${__dirname}/docs/api.yml`);
                this.app.use(
                    '/api-docs',
                    swaggerUi.serve,
                    swaggerUi.setup(swaggerDocument)
                );
        }
    }
}

export default new Server().app;