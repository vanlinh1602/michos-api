import test from 'ava';

import { honkaiImpact } from './setup';

test('record.elysian() should return valid response', async (t) => {
  const client = honkaiImpact();
  const res = await client.record.elysian();

  t.deepEqual(
    Object.keys(res).sort(),
    ['records', 'collections', 'summary', 'avatar_transcript'].sort()
  );

  const { records, collections, summary, avatar_transcript } = res;

  if (records.length) {
    t.deepEqual(
      Object.keys(records.shift() ?? []).sort(),
      [
        'settle_time_second',
        'score',
        'punish_level',
        'level',
        'buffs',
        'conditions',
        'main_avatar',
        'support_avatars',
        'elf',
        'extra_item_icon',
        'challenge_buffs',
        'score_mutiple',
        'assistant_extra_item',
        'cost_time',
      ].sort()
    );
  }

  if (collections.length) {
    t.deepEqual(
      Object.keys(collections.shift() ?? []).sort(),
      ['type', 'collected_number', 'total_number'].sort()
    );
  }

  if (avatar_transcript.length) {
    t.deepEqual(
      Object.keys(avatar_transcript.shift() ?? []).sort(),
      [
        'avatar',
        'level',
        'challenge_success_times',
        'max_challenge_score',
        'max_punish_level',
        'max_challenge_level',
      ].sort()
    );
  }

  t.deepEqual(
    Object.keys(summary).sort(),
    [
      'max_level_avatar_number',
      'max_support_point',
      'extra_item_number',
      'max_punish_level',
      'max_challenge_score',
      'avatar_numbers',
      'max_challenge_level',
    ].sort()
  );
});
