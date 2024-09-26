import { HoyoWiki, LanguageEnum } from '../../src';

export const hoyowiki = async () => {
  return new HoyoWiki({
    lang: LanguageEnum.VIETNAMESE,
  });
};
