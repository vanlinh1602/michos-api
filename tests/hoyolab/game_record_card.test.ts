import test from 'ava';

import { hoyolab } from './setup';

test('get game record card', async (t) => {
  const client = await hoyolab();
  const res = await client.gameRecordCard();

  if (res) {
    res.forEach((card) => {
      t.deepEqual(Object.keys(card), [
        'has_role',
        'game_id',
        'game_role_id',
        'nickname',
        'region',
        'level',
        'background_image',
        'is_public',
        'data',
        'region_name',
        'url',
        'data_switches',
        'h5_data_switches',
        'background_color',
        'background_image_v2',
        'logo',
        'game_name',
      ]);

      t.is(typeof card.has_role, 'boolean');
      t.is(typeof card.game_id, 'number');
      t.is(typeof card.game_role_id, 'string');
      t.is(typeof card.nickname, 'string');
      t.is(typeof card.region, 'string');
      t.is(typeof card.level, 'number');
      t.is(typeof card.background_image, 'string');
      t.is(typeof card.is_public, 'boolean');
    });
  } else {
    t.fail();
  }
});
