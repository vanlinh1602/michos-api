export enum HSRMenuEnum {
  CHARACTER = '104',
  LIGHT_CONE = '107',
  RELIC = '108',
}

export interface HSR_Wiki_MenuFilter {
  key: string;
  text: string;
  values: Value[];
  mi18n_key: string;
  is_multi_select: boolean;
  id: string;
  is_hidden: boolean;
  updated_at: string;
}

interface Value {
  id: string;
  value: string;
  mi18n_key: string;
  icon: string;
  enum_string: string;
}
