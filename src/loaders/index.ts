import express from 'express';
import Logger from './logger';
import expressLoader from './express';

export default (expressApp: express.Application) => {
  expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
