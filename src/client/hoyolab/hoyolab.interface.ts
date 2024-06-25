export enum GamesEnum {
  GENSHIN_IMPACT = 'hk4e_global',
  HONKAI_IMPACT = 'bh3_global',
  HONKAI_STAR_RAIL = 'hkrpg_global',
}

import { ICookie } from '../../cookie';
import { LanguageEnum } from '../../language';

/**
 * Represents the options for accessing the Hoyolab API.
 *
 * @interface
 */
export interface IHoyolabOptions {
  /**
   * The cookie used to authenticate the request. This can be either a string or an {@link ICookie} object.
   */
  cookie: ICookie | string;

  /**
   * The language to use for the request. This should be a value of {@link LanguageEnum}.
   */
  lang?: LanguageEnum;
}

/**
 * Interface for representing a game record card.
 *
 * @interface
 */
export interface IGameRecordCard {
  has_role: boolean;
  game_id: number;
  game_role_id: string;
  nickname: string;
  region: string;
  level: number;
  background_image: string;
  is_public: boolean;
  data: DataValue[];
  region_name: string;
  url: string;
  data_switches: DataSwitch[];
  h5_data_switches: any[];
  background_color: string;
  background_image_v2: string;
  logo: string;
  game_name: string;
}

interface DataValue {
  name: string;
  type: number;
  value: string;
}

interface DataSwitch {
  switch_id: number;
  is_public: boolean;
  switch_name: string;
}
