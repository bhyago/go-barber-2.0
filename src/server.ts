import 'reflect-metadata';

import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import colors from 'colors/safe';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log(colors.bold(colors.magenta('🚀 Server started on port 3333!')));
});
