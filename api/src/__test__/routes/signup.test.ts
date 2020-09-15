import request from 'supertest';
import { app } from '../../app';

it('should return a 201 successful signup', async () => {
  return request(app)
    .post('/api/auth/signup')
    .send({
      username: 'testname',
      password: 'Password#',
    })
    .expect(201);
});

it('should return a 400 with an invalid username', async () => {
  return request(app)
    .post('/api/auth/signup')
    .send({
      username: 'test',
      password: 'Password#',
    })
    .expect(400);
});

it('should return a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/auth/signup')
    .send({
      username: 'testname',
      password: 'pa',
    })
    .expect(400);
});

it('should return a 400 with missing username and password', async () => {
  await request(app)
    .post('/api/auth/signup')
    .send({
      username: 'testname',
    })
    .expect(400);

  return request(app)
    .post('/api/auth/signup')
    .send({
      password: 'Password#',
    })
    .expect(400);
});

it('disallows duplicate usernames', async () => {
  await request(app)
    .post('/api/auth/signup')
    .send({
      username: 'testname',
      password: 'Password#',
    })
    .expect(201);

  return request(app)
    .post('/api/auth/signup')
    .send({
      username: 'testname',
      password: 'Password#',
    })
    .expect(400);
});

it('sets a cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/auth/signup')
    .send({
      username: 'testname',
      password: 'Password#',
    })
    .expect(201);

  expect(response.get('Set-Cookie')).toBeDefined();
});
