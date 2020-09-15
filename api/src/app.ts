import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cors from 'cors';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/auth/current-user';
import { signinUserRouter } from './routes/auth/signin';
import { signoutUserRouter } from './routes/auth/signout';
import { signupUserRouter } from './routes/auth/signup';
import { ordersRouter } from './routes/private-test-data/orders';
import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middlewares/error-handler';
import { currentUser } from './middlewares/current-user';

const app = express();
app.set('trust proxy', true);
app.use(
  cors({
    origin: process.env.TRUST_URL,
    credentials: true,
  })
);

app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV === 'production',
    httpOnly: false,
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(currentUser);

app.use(currentUserRouter);
app.use(signinUserRouter);
app.use(signoutUserRouter);
app.use(signupUserRouter);
app.use(ordersRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
