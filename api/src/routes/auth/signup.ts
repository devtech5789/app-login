import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { User } from '../../models/user';
import { BadRequestError } from '../../errors/bad-request-errors';
import { validateRequest } from '../../middlewares/validate-request';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post(
  '/api/auth/signup',
  [
    body('username')
      .trim()
      .isLength({ min: 6 })
      .withMessage('Min length at least 6 symbols'),
    body('password')
      .trim()
      .isLength({ min: 6 })
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[!@#$%^*()_+}{&:'?;.,|<>]).{6,}$/
      )
      .withMessage(
        'Min length at least 6 symbols, A-z letters and special symbol - _, & etc.'
      ),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      throw new BadRequestError('Username already in use');
    }

    const user = User.build({ username, password });
    await user.save();

    // Generating JWT
    const userJwt = jwt.sign(
      {
        id: user.id,
        username: user.username,
      },
      process.env.JWT_KEY!
    );

    // Adding to cookie-session
    req.session = {
      jwt: userJwt,
    };

    res.status(201).send(user);
  }
);

export { router as signupUserRouter };
