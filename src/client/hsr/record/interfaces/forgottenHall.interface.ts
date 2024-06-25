export interface IHSRForgottenHallTime {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
}
export interface IHSRForgottenHall {
  schedule_id: number;
  begin_time: IHSRForgottenHallTime;
  end_time: IHSRForgottenHallTime;
  star_num: number;
  max_floor: string;
  battle_num: number;
  has_data: boolean;
  max_floor_detail: null;
  all_floor_detail: AllFloorDetail[];
  max_floor_id: number;
  groups: GroupForgottenHall[];
}

interface AllFloorDetail {
  name: string;
  round_num: number;
  star_num: number;
  node_1: Node;
  node_2: Node;
  is_chaos: boolean;
  maze_id: number;
  is_fast: boolean;
}

interface Node {
  challenge_time: IHSRForgottenHallTime;
  avatars: Avatar[];
}

interface Avatar {
  id: number;
  level: number;
  icon: string;
  rarity: number;
  element: string;
  rank: number;
}

interface GroupForgottenHall {
  schedule_id: number;
  begin_time: IHSRForgottenHallTime;
  end_time: IHSRForgottenHallTime;
  status: string;
  name_mi18n: string;
  upper_boss: null;
  lower_boss: null;
}
