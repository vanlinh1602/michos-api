export interface HSR_Wiki_LightCones {
  entry_page_id: string;
  name: string;
  icon_url: string;
  display_field: DisplayField;
  filter_values: FilterValues;
  desc: string;
}

interface DisplayField {
  attr_level_1: string;
  attr_level_80: string;
  equipment_skill: string;
}

interface FilterValues {
  equipment_rarity: Equipment;
  equipment_skill_type?: Equipment;
  equipment_source?: Equipment;
  equipment_paths: Equipment;
}

interface Equipment {
  values: string[];
  value_types: ValueType[];
  key: null | Key;
}

interface ValueType {
  id: string;
  value: string;
  mi18n_key: string;
  icon: string;
  enum_string: string;
}

export interface HSR_Wiki_LightCone_Detail {
  id: string;
  name: string;
  desc: string;
  icon_url: string;
  header_img_url: string;
  modules: Module[];
  filter_values: FilterValues;
  menu_id: string;
  menu_name: string;
  version: string;
  langs: any[];
  template_layout: null;
  edit_lock_status: string;
  correct_lock_status: string;
  menus: any[];
  template_id: string;
  ext: EXT;
  alias_name: string;
  lang: string;
  beta: boolean;
  page_type: string;
  menu_style: string;
}

interface EXT {
  fe_ext: string;
  post_ext: PostEXT;
  server_ext: string;
  personalized_color: string;
  scrolling_text: string;
  corner_mark: string;
}

interface PostEXT {
  post_id: string;
  post_user_name: string;
  post_time: string;
  post_avatar_url: string;
  url: string;
}

interface Key {
  key: string;
  text: string;
  values: any[];
  mi18n_key: string;
  is_multi_select: boolean;
  id: string;
  is_hidden: boolean;
  updated_at: string;
}

interface Module {
  name: string;
  is_poped: boolean;
  components: Component[];
  id: string;
  is_customize_name: boolean;
  is_abstract: boolean;
  is_show_switch: boolean;
  switch: boolean;
  desc: string;
  repeated: boolean;
  is_submodule: boolean;
  origin_module_id: string;
  without_border: boolean;
  can_delete: boolean;
  is_hidden: boolean;
  rich_text_editing: boolean;
}

interface Component {
  component_id: string;
  layout: string;
  data: string;
  style: string;
}
