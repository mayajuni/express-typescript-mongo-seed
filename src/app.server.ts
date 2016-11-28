/**
 * Created by mayajuni on 2016. 11. 28..
 */
import * as express from 'express';
import * as dotenv from 'dotenv';
import App from './app';
import { LoggerModule } from './module/logger.module';

export default class AppServer{
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