import { IHIElf } from './arena.interface';

export interface IHILineup {
  id: string;
  name: string;
  star: number;
  avatar_background_path: string;
  icon_path: string;
  background_path: string;
  large_background_path: string;
  figure_path: string;
  level: number;
  oblique_avatar_background_path: string;
  half_length_icon_path: string;
  image_path: string;
  wiki_url: string;
  avatar_background_path_v2: string;
  attribute_id: number;
  attribute_background_path: string;
  sec_part_icon: string;
}

export interface IHIBoss {
  id: string;
  name: string;
  avatar: string;
}

export interface IHIAbyssReport {
  score: number;
  updated_time_second: string;
  boss: IHIBoss;
  lineup: IHILineup[];
  rank: number;
  settled_cup_number: number;
  cup_number: number;
  elf: IHIElf | null;
  level: number;
  settled_level: number;
}

export interface IHIAbyss {
  reports: IHIAbyssReport[];
}
