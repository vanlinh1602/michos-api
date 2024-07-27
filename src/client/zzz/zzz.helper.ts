import { HoyoAPIError } from '../../error';
import { ZzzRegion, ZzzRegionKeyType } from './zzz.interface';

/**
 * Get Server Region by UID
 *
 * @param uid number UID
 * @returns {string}
 */
export function getZzzRegion(uid: number): ZzzRegion {
  const server_region = Number(uid.toString().trim().slice(0, 1));
  let key: string;

  switch (server_region) {
    case 1:
      key = 'ASIA';
      break;
    default:
      throw new HoyoAPIError(`Given UID ${uid} is invalid !`);
  }

  return ZzzRegion[key as ZzzRegionKeyType];
}
