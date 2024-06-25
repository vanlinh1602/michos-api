export interface IHSRStats {
  active_days: number;
  avatar_num: number;
  achievement_num: number;
  chest_num: number;
  abyss_process: string;
  field_ext_map: FieldEXTMap;
  dream_paster_num: number;
}

export interface FieldEXTMap {
  dream_paster_num: AchievementNum;
  active_days: AchievementNum;
  avatar_num: AchievementNum;
  achievement_num: AchievementNum;
  chest_num: AchievementNum;
}

export interface AchievementNum {
  link: string;
  backup_link: string;
}
