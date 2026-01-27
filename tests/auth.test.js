const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Auth', () => {
  it('registers user', async () => {
    const res = await request(app).post('/auth/register').send({
      name: 'Test',
      email: 'test@test.com',
      password: '123456'
    });
    expect(res.statusCode).toBe(201);
  });

  it('logs in user', async () => {
    const res = await request(app).post('/auth/login').send({
      email: 'test@test.com',
      password: '123456'
    });
    expect(res.body.token).toBeDefined();
  });
});
