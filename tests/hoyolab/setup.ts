import { config } from 'dotenv';

import { Hoyolab, ICookie, LanguageEnum } from '../../src';
config();

export const cookie: ICookie = {
  accountId: parseInt(process.env.ACCOUNT_ID ?? '0'),
  cookieToken: process.env.COOKIE_TOKEN,
  ltoken: process.env.LTOKEN ?? '',
  ltokenV2: process.env.LTOKEN_V2 ?? '',
  ltuid: parseInt(process.env.LTUID ?? '0'),
  ltuidV2: parseInt(process.env.LTUID_V2 ?? '0'),
  cookieTokenV2: process.env.COOKIE_TOKEN_V2 ?? '',
  accountIdV2: parseInt(process.env.ACCOUNT_ID_V2 ?? '0'),
  accountMidV2: process.env.ACCOUNT_MID_V2,
  ltmidV2: process.env.LTMID_V2 ?? '',
};

export const hoyolab = async () => {
  return new Hoyolab({
    cookie,
    lang: LanguageEnum.VIETNAMESE,
  });
};
