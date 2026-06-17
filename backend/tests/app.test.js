const request = require('supertest');
const app = require('../src/app');

describe('Tiny API endpoints', () => {
  test('GET / should return welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Welcome to Tiny API' });
  });

  test('GET /health should return status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'Healthy' });
  });

  test('GET /version should return version', async () => {
    const res = await request(app).get('/version');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ version: '1.0.0' });
  });

  test('GET /info should return app info', async () => {
    const res = await request(app).get('/info');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ app: 'Tiny App', environment: 'dev' });
  });
});
