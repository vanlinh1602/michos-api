import test from 'ava';

import { honkaiImpact } from './setup';

test('record.abyss() should return valid response', async (t) => {
  const client = honkaiImpact();
  const res = await client.record.abyss();

  const { reports } = res;

  if (reports.length) {
    const report = reports.shift() ?? {};
    t.deepEqual(
      Object.keys(report).sort(),
      [
        'score',
        'updated_time_second',
        'boss',
        'lineup',
        'rank',
        'settled_cup_number',
        'cup_number',
        'elf',
        'level',
        'settled_level',
      ].sort()
    );
  }
});
