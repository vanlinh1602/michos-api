import test from 'ava';

import { Cookie, HonkaiStarRail } from '../../src';
import { cookie } from './setup';

test('HonkaiStarRail.constructor() should be able to handle cookie string', async (t) => {
  const cookieString = Cookie.parseCookie(cookie);

  const gi = new HonkaiStarRail({
    cookie: cookieString,
  });

  t.deepEqual(gi.cookie, Cookie.parseCookieString(cookieString));
});
