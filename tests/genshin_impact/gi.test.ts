import test from 'ava';

import { Cookie, GenshinImpact } from '../../src';
import { cookie } from './setup';

test('GenshinImpact.constructor() should be able to handle cookie string', async (t) => {
  const cookieString = Cookie.parseCookie(cookie);

  const gi = new GenshinImpact({
    cookie: cookieString,
  });

  t.deepEqual(gi.cookie, Cookie.parseCookieString(cookieString));
});
