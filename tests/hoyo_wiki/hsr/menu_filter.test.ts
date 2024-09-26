import test from 'ava';

import { hoyowiki } from '../setup';

test('get menu filter in honkai star rail wiki', async (t) => {
  const client = await hoyowiki();
  const res = await client.hsr.menuFilters();

  if (res) {
    res.forEach((menuFilter) => {
      t.deepEqual(
        Object.keys(menuFilter).sort(),
        [
          'key',
          'text',
          'values',
          'mi18n_key',
          'is_multi_select',
          'id',
          'is_hidden',
          'updated_at',
        ].sort()
      );
      t.is(typeof menuFilter.key, 'string');
      t.is(typeof menuFilter.text, 'string');
      t.is(typeof menuFilter.mi18n_key, 'string');
      t.is(typeof menuFilter.is_multi_select, 'boolean');
      t.is(typeof menuFilter.id, 'string');
      t.is(typeof menuFilter.is_hidden, 'boolean');
      t.is(typeof menuFilter.updated_at, 'string');

      menuFilter.values.forEach((value) => {
        t.deepEqual(
          Object.keys(value).sort(),
          ['id', 'value', 'mi18n_key', 'icon', 'enum_string'].sort()
        );
        t.is(typeof value.id, 'string');
        t.is(typeof value.value, 'string');
        t.is(typeof value.mi18n_key, 'string');
        t.is(typeof value.icon, 'string');
        t.is(typeof value.enum_string, 'string');
      });
    });
  } else {
    t.fail();
  }
});
