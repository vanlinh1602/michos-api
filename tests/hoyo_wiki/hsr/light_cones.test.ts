import test from 'ava';

import { hoyowiki } from '../setup';

test('get light cones in honkai star rail wiki', async (t) => {
  const client = await hoyowiki();
  const res = await client.hsr.lightCones();

  if (res) {
    res.forEach((lightCone) => {
      t.deepEqual(
        Object.keys(lightCone).sort(),
        [
          'entry_page_id',
          'name',
          'icon_url',
          'display_field',
          'filter_values',
          'desc',
        ].sort()
      );
      t.is(typeof lightCone.entry_page_id, 'string');
      t.is(typeof lightCone.name, 'string');
      t.is(typeof lightCone.icon_url, 'string');
      t.is(typeof lightCone.desc, 'string');

      t.deepEqual(Object.keys(lightCone.display_field).sort(), [
        'attr_level_1',
        'attr_level_80',
        'equipment_skill',
      ]);
    });
  } else {
    t.fail();
  }
});

test('get light cone detail in honkai star rail wiki', async (t) => {
  const client = await hoyowiki();
  const res = await client.hsr.lightConeDetail('3069');

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
    t.is(typeof res.template_layout, 'object');
    t.is(typeof res.edit_lock_status, 'string');
    t.is(typeof res.correct_lock_status, 'string');
    t.is(typeof res.ext, 'object');
    t.is(typeof res.alias_name, 'string');
    t.is(typeof res.lang, 'string');
    t.is(typeof res.beta, 'boolean');
    t.is(typeof res.page_type, 'string');
    t.is(typeof res.menu_style, 'string');
  } else {
    t.fail();
  }
});
