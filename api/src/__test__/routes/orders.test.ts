import request from 'supertest';
import { app } from '../../app';

it('can only be accessed if the user is signed in', async () => {
  await request(app)
    .get('/api/orders')
    .send()

    .expect(401);
});
