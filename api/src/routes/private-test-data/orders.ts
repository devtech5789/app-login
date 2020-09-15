import express, { Request, Response } from 'express';
import { requireAuth } from '../../middlewares/require-auth';

const router = express.Router();

router.get('/api/orders', requireAuth, async (req: Request, res: Response) => {
  const mockPrivateData = [
    {
      id: 1,
      type: 'ticket order',
      status: 'created',
    },
    {
      id: 2,
      type: 'ticket order',
      status: 'cancelled',
    },
  ];

  res.send(mockPrivateData);
});

export { router as ordersRouter };
