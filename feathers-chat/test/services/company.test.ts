import assert from 'assert';
import app from '../../src/app';

describe('\'company\' service', () => {
  it('registered the service', () => {
    const service = app.service('company');

    assert.ok(service, 'Registered the service');
  });
});
