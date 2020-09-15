import request from 'supertest';
import { app } from '../../app';

it('responds with details about the current user', async () => {
  const cookie = await global.signin();

  const response = await request(app)
    .get('/api/auth/currentuser')
    .set('Cookie', cookie)
    .send()
    .expect(200);

  expect(response.body.currentUser.username).toEqual('testname');
});

it('responds with null if no authenticated', async () => {
  const response = await request(app)
    .get('/api/auth/currentuser')
    .send()
    .expect(200);

  expect(response.body.currentUser).toEqual(null);
});
