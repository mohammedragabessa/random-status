import { Client, expect } from '@loopback/testlab';
import { RandomStatusApplication } from '../..';
import { setupApplication } from './test-helper';

describe('RandomStatusController', () => {
  let app: RandomStatusApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({ app, client } = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('invokes GET /RandomStatus', async () => {
    const res = await client.get('/RandomStatus').expect(200);
    expect(res.body).to.Boolean;
  });
});
