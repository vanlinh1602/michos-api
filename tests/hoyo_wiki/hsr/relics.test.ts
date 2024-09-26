import test from 'ava';

import { hoyowiki } from '../setup';

test('get relics in honkai star rail wiki', async (t) => {
  const client = await hoyowiki();
  const res = await client.hsr.relics();

  if (res) {
    res.forEach((relic) => {
      t.deepEqual(
        Object.keys(relic).sort(),
        [
          'entry_page_id',
          'name',
          'icon_url',
          'display_field',
          'filter_values',
          'desc',
        ].sort()
      );
      t.is(typeof relic.entry_page_id, 'string');
      t.is(typeof relic.name, 'string');
      t.is(typeof relic.icon_url, 'string');
      t.is(typeof relic.desc, 'string');

      t.deepEqual(
        Object.keys(relic.display_field).sort(),
        [
          'two_set_effect',
          'single_set_effect',
          'set_icon_url_list',
          'four_set_effect',
        ].sort()
      );

      t.is(typeof relic.display_field.two_set_effect, 'string');
      t.is(typeof relic.display_field.single_set_effect, 'string');
      t.is(typeof relic.display_field.set_icon_url_list, 'string');
      t.is(typeof relic.display_field.four_set_effect, 'string');

      t.deepEqual(
        Object.keys(relic.filter_values.relic_skill_type).sort(),
        ['values', 'value_types', 'key'].sort()
      );
    });
  } else {
    t.fail();
  }
});

test('get relic detail in honkai star rail wiki', async (t) => {
  const client = await hoyowiki();
  const res = await client.hsr.relicDetail('3064');

  if (res) {
    t.deepEqual(
      Object.keys(res).sort(),
      [
        'id',
        'name',
        'desc',
        'icon_url',
        'header_img_url',
        'modules',
        'filter_values',
        'menu_id',
        'menu_name',
        'version',
        'langs',
        'template_layout',
        'edit_lock_status',
        'correct_lock_status',
        'menus',
        'template_id',
        'ext',
        'alias_name',
        'lang',
        'beta',
        'page_type',
        'menu_style',
      ].sort()
    );
    t.is(typeof res.id, 'string');
    t.is(typeof res.name, 'string');
    t.is(typeof res.desc, 'string');
    t.is(typeof res.icon_url, 'string');
    t.is(typeof res.header_img_url, 'string');
    t.is(typeof res.menu_id, 'string');
    t.is(typeof res.menu_name, 'string');
    t.is(typeof res.version, 'string');
  } else {
    t.fail();
  }
});
