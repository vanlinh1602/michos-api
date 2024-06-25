import test from 'ava';

import { hoyolab } from './setup';

test('get game record card', async (t) => {
  const client = await hoyolab();
  const res = await client.gameRecordCard();

  if (res) {
    console.log(res);
    t.pass();
  } else {
    t.fail();
  }
});
