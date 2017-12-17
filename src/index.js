import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './renderer';

const app = express();
const PORT = process.env.port || 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
  const promises = matchRoutes(Routes, req.path);

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer({ req, context });

    if (context.url) {
      res.redirect(301, context.url);
      return;
    }

    if (context.NotFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
