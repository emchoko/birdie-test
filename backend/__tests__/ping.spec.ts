import app from '../src/application'
import * as request from 'supertest';

describe('We are grateful to you for doing this it.', () => {
  it('thanks you', async () => {
    await request(app)
      .get('/hello')
      .expect(200)
      .expect(function (res) {
        expect(res.body.greetings).toContain('Thank you');
      });
  })
});

describe('recipients', () => {
  it('get recipients', async () => {
    await request(app)
      .get('/recipient')
      .expect(200)
      .expect(function (res) {
        expect(res.body).toContainEqual({ "DISTINCT": "df50cac5-293c-490d-a06c-ee26796f850d" });
        expect(res.body).toContainEqual({ "DISTINCT": "e3e2bff8-d318-4760-beea-841a75f00227" });
        expect(res.body).toContainEqual({ "DISTINCT": "ad3512a6-91b1-4d7d-a005-6f8764dd0111" });
      })
  });
});

describe('events', () => {
  it('get a recipient events by a date range', async () => {
    await request(app)
      .get('/recipient/df50cac5-293c-490d-a06c-ee26796f850d?startDate=2019-05-08 01:00:01.000'
        + '&endDate=2019-05-09 01:00:00.000')
      .expect(200)
      .expect(function (res) {
        expect(res.body.length).toBeGreaterThan(2);
      });
  });
});