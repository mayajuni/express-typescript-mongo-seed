/**
 * Created by mayajuni on 2016. 11. 21..
 */
import * as express from 'express';
import * as dotenv from 'dotenv';
import App from './app';
import { LoggerModule } from './module/logger.module';

dotenv.config({
    silent: true,
    path: '.env'
});
/* NODE_ENV default가 development이라서 변경 처리 */
process.env.NODE_ENV = 'production';

class Server {
    private port = process.env.PORT || 3000;
    public app: express.Application;
    private server: any;

    constructor() {
        this.createApp();
        this.listen();
    }

    private createApp() {
        this.app = new App().app;
    }

    private listen(): void {
        this.app.listen(this.port, () => {
            LoggerModule.log('Express server listening on port ' + this.port);
        }).on('error', err => {
            LoggerModule.errorLog(err);
        });
    }
}

const server = new Server();
module.exports = server.app;