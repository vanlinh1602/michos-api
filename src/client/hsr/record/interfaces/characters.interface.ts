interface IHSRCharacterBase {
  id: number;
  level: number;
  name: string;
  element: string;
  icon: string;
  rarity: number;
  rank: number;
}
interface Equip {
  id: number;
  level: number;
  rank: number;
  name: string;
  desc: string;
  icon: string;
  rarity: number;
}

interface Ornament {
  id: number;
  level: number;
  pos: number;
  name: string;
  desc: string;
  icon: string;
  rarity: number;
  main_property: MainPropertyClass;
  properties: MainPropertyClass[];
}

interface MainPropertyClass {
  property_type: number;
  value: string;
  times: number;
}

interface PropertyElement {
  property_type: number;
  base: string;
  add: string;
  final: string;
}

interface Rank {
  id: number;
  pos: number;
  name: string;
  icon: string;
  desc: string;
  is_unlocked: boolean;
}

interface Skill {
  point_id: string;
  point_type: number;
  item_url: string;
  level: number;
  is_activated: boolean;
  is_rank_work: boolean;
  pre_point: string;
  anchor: string;
  remake: Remake;
  skill_stages: SkillStage[];
}

enum Remake {
  BíKỹ = 'Bí Kỹ',
  ChiếnKỹ = 'Chiến Kỹ',
  NăngLựcThêm = 'Năng Lực Thêm',
  ThiênPhú = 'Thiên Phú',
  ThuộcTínhThêm = 'Thuộc Tính Thêm',
  TuyệtKỹ = 'Tuyệt Kỹ',
  TấnCôngThường = 'Tấn Công Thường',
}

interface SkillStage {
  desc: string;
  name: string;
  level: number;
  remake: Remake;
  item_url: string;
  is_activated: boolean;
  is_rank_work: boolean;
}

export interface IHSRCharacterSummary extends IHSRCharacterBase {
  is_chosen: false;
}

export interface IHSRCharacterFull extends IHSRCharacterBase {
  image: string;
  equip: Equip | null;
  relics: Ornament[];
  ornaments: Ornament[];
  ranks: Rank[];
  properties: PropertyElement[];
  skills: Skill[];
  base_type: number;
  figure_path: string;
}
