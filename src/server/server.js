/* eslint-disable no-console */
import Koa from 'koa';
import BodyParser from 'koa-bodyparser';
import Logger from 'koa-logger';
import error from './middleware/error';
import { routes } from './routes';

const app = new Koa();

app.use(error);
app.use(Logger());
app.use(BodyParser());
app.use(routes);

export default app;
