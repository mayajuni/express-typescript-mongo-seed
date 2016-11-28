/**
 * Created by mayajuni on 2016. 11. 21..
 */
import * as dotenv from 'dotenv';
import AppServer from './app.server';

dotenv.config({
    silent: true,
    path: '../.env'
});

const server = new AppServer();

module.exports = server.app;