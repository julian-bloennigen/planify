import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from './app.js';

describe('API Tests', () => {
  describe('GET /api/health', () => {
    it('should return health status', async () => {
      const response = await request(app).get('/api/health');
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status', 'ok');
      expect(response.body).toHaveProperty('timestamp');
    });
  });

  describe('GET /api/hello', () => {
    it('should return hello message', async () => {
      const response = await request(app).get('/api/hello');
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message', 'Hello from Planify API!');
    });
  });
});
