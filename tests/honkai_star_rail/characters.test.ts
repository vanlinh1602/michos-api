import test from 'ava';
import fs from 'fs';

import { hsr } from './setup';

test('record.characters() should retun valid response', async (t) => {
  const client = await hsr();
  const res = await client.record.characters();

  // store res in a file json
  fs.writeFileSync('characters.json', JSON.stringify(res, null, 2));

  res.forEach((char) => {
    t.deepEqual(Object.keys(char), [
      'id',
      'level',
      'name',
      'element',
      'icon',
      'rarity',
      'rank',
      'image',
      'equip',
      'relics',
      'ornaments',
      'ranks',
      'properties',
      'skills',
      'base_type',
      'figure_path',
    ]);

    t.is(typeof char.id, 'number');
    t.is(typeof char.level, 'number');
    t.is(typeof char.name, 'string');
    t.is(typeof char.element, 'string');
    t.is(typeof char.icon, 'string');
    t.is(typeof char.rarity, 'number');
    t.is(typeof char.rank, 'number');
    t.is(typeof char.image, 'string');

    if (char.equip) {
      t.is(typeof char.equip.id, 'number');
      t.is(typeof char.equip.level, 'number');
      t.is(typeof char.equip.rank, 'number');
      t.is(typeof char.equip.name, 'string');
      t.is(typeof char.equip.desc, 'string');
      t.is(typeof char.equip.icon, 'string');
    } else {
      t.assert(char.equip === null);
    }
  });
});
