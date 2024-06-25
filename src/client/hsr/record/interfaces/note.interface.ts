export interface IHSRNote {
  current_stamina: number;
  max_stamina: number;
  stamina_recover_time: number;
  accepted_epedition_num: number;
  total_expedition_num: number;
  expeditions: IHSRExpedition[];
  current_train_score: number;
  max_train_score: number;
  current_rogue_score: number;
  max_rogue_score: number;
  weekly_cocoon_cnt: number;
  weekly_cocoon_limit: number;
  current_reserve_stamina: number;
  is_reserve_stamina_full: boolean;
  rogue_tourn_weekly_unlocked: boolean;
  rogue_tourn_weekly_max: number;
  rogue_tourn_weekly_cur: number;
}

export interface IHSRExpedition {
  avatars: string[];
  status: string;
  remaining_time: number;
  name: string;
  item_url: string;
}
