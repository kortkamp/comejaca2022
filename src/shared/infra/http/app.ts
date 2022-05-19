import 'reflect-metadata';
import 'dotenv/config';
import upload from '@config/upload';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import { createServer } from 'http';
import path from 'path';

import errorHandling from './middlewares/errorHandling';
import { morganMiddleware } from './middlewares/morganMiddleware';
// import rateLimiter from './middlewares/rateLimiter';
import { routes } from './routes';
import '@shared/container';

const app = express();
const server = createServer(app);

app.use(morganMiddleware);

// app.use(rateLimiter);
app.use(cors());
app.use(express.json());

if (process.env.STORAGE_DRIVER === 'disk') {
  app.use('/avatar', express.static(`${upload('avatar').uploadsFolder}/`));
}

app.use('/', express.static(path.join(__dirname, '..', '..', '..', 'public')));

app.use(routes);

app.use(errorHandling);

export { server };
