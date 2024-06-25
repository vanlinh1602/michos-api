import test from 'ava';

import { hsr } from './setup';

test('record.note() should return valid response', async (t) => {
  const client = await hsr();
  const res = await client.record.note();

  const fields = [
    'current_stamina',
    'max_stamina',
    'stamina_recover_time',
    'accepted_epedition_num',
    'total_expedition_num',
    'expeditions',
    'current_train_score',
    'max_train_score',
    'current_rogue_score',
    'max_rogue_score',
    'weekly_cocoon_cnt',
    'weekly_cocoon_limit',
    'current_reserve_stamina',
    'is_reserve_stamina_full',
    'rogue_tourn_weekly_unlocked',
    'rogue_tourn_weekly_max',
    'rogue_tourn_weekly_cur',
  ];

  if (fields.some((field) => !Object.keys(res).includes(field))) {
    t.fail('Response does not contain all required fields');
  }

  t.is(typeof res.current_stamina, 'number');
  t.is(typeof res.max_stamina, 'number');
  t.is(typeof res.stamina_recover_time, 'number');
  t.is(typeof res.accepted_epedition_num, 'number');
  t.is(typeof res.total_expedition_num, 'number');

  res.expeditions.forEach((expe) => {
    t.deepEqual(
      Object.keys(expe).sort(),
      ['avatars', 'status', 'remaining_time', 'name', 'item_url'].sort()
    );

    t.is(typeof expe.status, 'string');
    t.is(typeof expe.remaining_time, 'number');
    t.is(typeof expe.name, 'string');

    expe.avatars.forEach((avatar) => {
      t.is(typeof avatar, 'string');
    });
  });
});
