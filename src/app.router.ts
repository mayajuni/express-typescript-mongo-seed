/**
 * Created by mayajuni on 2016. 11. 22..
 */
import * as express from 'express';
import * as login from './router/login.router';

export class AppRouter {
    app: express.Application;

    constructor(app: express.Application) {
        this.app = app;
        this.router();
    }

    router() {
        this.app.use('/api/login', login);
    }
}