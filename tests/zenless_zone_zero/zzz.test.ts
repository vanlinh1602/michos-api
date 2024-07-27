import test from 'ava';

import { Cookie, ZenlessZoneZero } from '../../src';
import { cookie } from './setup';

test('ZenlessZoneZero.constructor() should be able to handle cookie string', async (t) => {
  const cookieString = Cookie.parseCookie(cookie);

  const gi = new ZenlessZoneZero({
    cookie: cookieString,
  });

  t.deepEqual(gi.cookie, Cookie.parseCookieString(cookieString));
});
