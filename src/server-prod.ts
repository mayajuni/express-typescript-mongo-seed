/**
 * Created by mayajuni on 2016. 11. 21..
 */
import * as dotenv from 'dotenv';
import AppServer from './app.server';

dotenv.config();
/* NODE_ENV default가 development이라서 변경 처리 */
process.env.NODE_ENV = 'production';

/* 서버 구동 */
const server = new AppServer();

module.exports = server.app;