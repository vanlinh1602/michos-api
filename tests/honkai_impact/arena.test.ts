import test from 'ava';

import { honkaiImpact } from './setup';

test('record.arena() should return valid response', async (t) => {
  const client = honkaiImpact();
  const res = await client.record.arena();

  if (res.reports.length) {
    t.deepEqual(
      Object.keys(res.reports.shift() ?? []).sort(),
      [
        'score',
        'rank',
        'ranking_percentage',
        'area',
        'battle_infos',
        'time_second',
      ].sort()
    );
  }
});
