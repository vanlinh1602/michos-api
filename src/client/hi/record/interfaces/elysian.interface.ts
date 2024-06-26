export interface IHIElysian {
  records: IHIElysianRecord[];
  collections: IHIElysianCollection[];
  summary: IHIElysianSummary;
  avatar_transcript: IHIAvatarTranscript[];
}

export interface IHIAvatarTranscript {
  avatar: Avatar;
  level: number;
  challenge_success_times: number;
  max_challenge_score: number;
  max_punish_level: number;
  max_challenge_level: number;
}
export interface IHIElysianCollection {
  type: string;
  collected_number: number;
  total_number: number;
}

export interface IHIElysianSummary {
  max_level_avatar_number: number;
  max_support_point: number;
  extra_item_number: number;
  max_punish_level: number;
  max_challenge_score: number;
  avatar_numbers: number;
  max_challenge_level: number;
}

export interface IHIElysianRecord {
  settle_time_second: string;
  score: number;
  punish_level: number;
  level: number;
  buffs: Buff[];
  conditions: any[];
  main_avatar: Avatar;
  support_avatars: Avatar[];
  elf: null;
  extra_item_icon: string;
  challenge_buffs: ChallengeBuff[];
  score_mutiple: number;
  assistant_extra_item: string;
  cost_time: number;
}

interface Buff {
  icon: string;
  number: number;
  id: number;
}

interface ChallengeBuff {
  name: string;
  cost: number;
}

interface Avatar {
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
