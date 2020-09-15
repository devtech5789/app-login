import mongoose from 'mongoose';
import { app } from './app';
import { logger } from './logging/log-settings';
import dotenv from 'dotenv';
dotenv.config();

const start = async () => {
  try {
    if (!process.env.JWT_KEY) {
      logger.error('JWT_KEY must be defined');
      throw new Error('JWT_KEY must be defined');
    }

    await mongoose.connect(`${process.env.MONGO_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    logger.info('Connected to mongodb');
  } catch (error) {
    logger.error(error);
  }

  app.listen(process.env.PORT, () => {
    logger.info(`Auth listening on port ${process.env.PORT}`);
  });
};

start();
