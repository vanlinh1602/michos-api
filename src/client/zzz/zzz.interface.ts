import { IHoyolabOptions } from '../hoyolab';

export enum ZzzRegion {
  AMERICA = 'prod_gf_us',
  ASIA = 'prod_gf_jp',
  EUROPE = 'prod_gf_eu',
  TW_HK_MO = 'prod_gf_sg',
}

export type ZzzRegionKeyType = keyof typeof ZzzRegion;

export interface IZzzOptions extends IHoyolabOptions {
  uid?: number;
  region?: ZzzRegion;
}
