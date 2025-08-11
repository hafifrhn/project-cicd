const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should respond with DB time', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toMatch(/Hello from backend! DB time:/);
  });
});
