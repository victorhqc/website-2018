import 'babel-polyfill';
import express from 'express';
import redis from 'redis';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import server from './server';
import ContextManager from './server/helpers/context';
import {
  NOT_FOUND,
} from './constants';

const app = express();
const PORT = process.env.port || 3000;

const REDIS_PORT = process.env.REDIS_PORT || 6379;
const client = redis.createClient(REDIS_PORT);

app.use(express.static('public'));

const cache = (req, res, next) => {
  client.get('app', (err, data) => {
    if (err) {
      throw err;
    }

    if (!data) {
      next();
      return;
    }

    res.send(data);
  });
};

app.get('*', cache, (req, res) => {
  const promises = matchRoutes(Routes, req.path);

  Promise.all(promises).then(() => {
    const context = new ContextManager();
    const content = server({ req, context });
    client.setex('app', 3600 * 24, content);

    if (context.get(NOT_FOUND)) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
