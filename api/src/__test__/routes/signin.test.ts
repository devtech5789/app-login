import request from 'supertest';
import { app } from '../../app';

it('fails when an username that not exists is supplied', async () => {
  return request(app)
    .post('/api/auth/signin')
    .send({
      username: 'testname22',
      password: 'Password#',
    })
    .expect(400);
});

it('fails when an incorrect password is supplied', async () => {
  await request(app)
    .post('/api/auth/signup')
    .send({
      username: 'testname',
      password: 'Password#',
    })
    .expect(201);

  return request(app)
    .post('/api/auth/signin')
    .send({
      username: 'testname',
      password: 'Password#1',
    })
    .expect(400);
});

it('fails when an incorrect username is supplied', async () => {
  await request(app)
    .post('/api/auth/signup')
    .send({
      username: 'testname',
      password: 'Password#',
    })
    .expect(201);

  return request(app)
    .post('/api/auth/signin')
    .send({
      username: 'testname1',
      password: 'Password#',
    })
    .expect(400);
});

it('responds with a cookie when given valid credentials', async () => {
  await request(app)
    .post('/api/auth/signup')
    .send({
      username: 'testname',
      password: 'Password#',
    })
    .expect(201);

  const response = await request(app)
    .post('/api/auth/signin')
    .send({
      username: 'testname',
      password: 'Password#',
    })
    .expect(200);

  expect(response.get('Set-Cookie')).toBeDefined();
});
