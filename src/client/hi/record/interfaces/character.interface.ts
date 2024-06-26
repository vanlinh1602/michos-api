export interface IHIAvatar {
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

export interface IHIStigmata {
  id: number;
  name: string;
  max_rarity: number;
  rarity: number;
  icon: string;
  level: number;
  wiki_url: string;
}

export interface IHIWeapon extends IHIStigmata {
  homology_level?: number;
}

export interface IHICharacter {
  character: {
    avatar: IHIAvatar;
    weapon: IHIWeapon;
    stigmatas: IHIStigmata[];
    costumes: any[];
  };
  is_chosen: boolean;
}

export interface IHICharacters {
  characters: IHICharacter[];
}
