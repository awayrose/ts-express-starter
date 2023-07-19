// import 'reflect-metadata'; // We need this in order to use @Decorators

import express from 'express';
// import config from '../config';
import cors from 'cors';
import morganMiddleware from './morganMiddleware';
import bodyParser from 'body-parser';

export default ({ app }: { app: express.Application }) => {
  /**
   * Health Check endpoints
   * @TODO Explain why they are here
   */
  app.get('/status', (req, res) => {
    res.status(200).send('Health OK');
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // parse requests of content-type - application/json
  app.use(bodyParser.json());

  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // Morgan Middleware
  app.use(morganMiddleware);
};
