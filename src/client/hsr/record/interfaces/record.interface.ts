import { IHSRCharacterSummary } from './characters.interface';
import { IHSRStats } from './stats.interface';

export interface IHSRRecord {
  avatar_list: IHSRCharacterSummary[];
  stats: IHSRStats;
  cur_head_icon_url: string;
  phone_background_image_url: string;
}
