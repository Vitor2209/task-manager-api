const request = require('supertest');
const app = require('../app');

let token;

beforeAll(async () => {
  const res = await request(app).post('/auth/login').send({
    email: 'test@test.com',
    password: '123456'
  });
  token = res.body.token;
});

describe('Tasks', () => {
  it('creates task', async () => {
    const res = await request(app)
      .post('/tasks')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Study Node' });

    expect(res.statusCode).toBe(201);
  });
});
