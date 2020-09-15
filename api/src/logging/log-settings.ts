import winston from 'winston';

export const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: 'combined.log',
    }),
    new winston.transports.Console({
      level: 'info',
      handleExceptions: true,
    }),
  ],
});
