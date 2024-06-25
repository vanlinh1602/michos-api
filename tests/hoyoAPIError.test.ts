import test from 'ava';

import { HoyoAPIError } from '../src';

test('Should be return HoyoAPIError', (t) => {
  t.throws(
    () => {
      throw new HoyoAPIError('Error');
    },
    {
      instanceOf: HoyoAPIError,
      message: 'Error',
    }
  );
});
