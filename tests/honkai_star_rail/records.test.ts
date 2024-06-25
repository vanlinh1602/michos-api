import test from 'ava';
import fs from 'fs';

import { hsr } from './setup';

test('record.records() should return valid response', async (t) => {
  const client = await hsr();
  const res = await client.record.records();

  fs.writeFileSync('hsr-records.json', JSON.stringify(res, null, 2));

  t.deepEqual(
    Object.keys(res).sort(),
    [
      'avatar_list',
      'stats',
      'cur_head_icon_url',
      'phone_background_image_url',
    ].sort()
  );

  t.deepEqual(
    Object.keys(res.stats).sort(),
    [
      'active_days',
      'avatar_num',
      'achievement_num',
      'chest_num',
      'abyss_process',
      'field_ext_map',
      'dream_paster_num',
    ].sort()
  );

  t.is(typeof res.stats.active_days, 'number');
  t.is(typeof res.stats.avatar_num, 'number');
  t.is(typeof res.stats.achievement_num, 'number');
  t.is(typeof res.stats.chest_num, 'number');
  t.is(typeof res.stats.abyss_process, 'string');

  res.avatar_list.forEach((avatar) => {
    t.deepEqual(
      Object.keys(avatar).sort(),
      [
        'id',
        'level',
        'name',
        'element',
        'icon',
        'rarity',
        'rank',
        'is_chosen',
      ].sort()
    );

    t.is(typeof avatar.id, 'number');
    t.is(typeof avatar.level, 'number');
    t.is(typeof avatar.name, 'string');
    t.is(typeof avatar.element, 'string');
    t.is(typeof avatar.icon, 'string');
    t.is(typeof avatar.rarity, 'number');
    t.is(typeof avatar.rank, 'number');
    t.is(typeof avatar.is_chosen, 'boolean');
  });
});
