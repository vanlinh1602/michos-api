import { IHIBoss, IHILineup } from './abyss.interface';

export interface IHIArena {
  reports: IHIArenaReport[];
}

export interface IHIArenaReport {
  score: number;
  rank: number;
  ranking_percentage: string;
  area: number;
  battle_infos: BattleInfo[];
  time_second: string;
}

export interface BattleInfo {
  elf: IHIElf | null;
  lineup: IHILineup[];
  boss: IHIBoss;
  score: number;
}

export interface IHIElf {
  id: string;
  name: string;
  avatar: string;
  rarity: number;
  star: number;
  is_collaborator: boolean;
  collaborator: number;
}
