import test from 'ava';

import { hoyolab } from './setup';

test('get game list', async (t) => {
  const client = await hoyolab();
  const res = await client.gamesList();

  if (res) {
    console.log(res);
    t.pass();
  } else {
    t.fail();
  }
});
