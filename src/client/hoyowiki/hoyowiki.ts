import { Language, LanguageEnum } from '../../language';
import { HSRWiki } from './games/hsr';
import { IHoyoWikiOptions } from './hoyowiki.interface';

/**
 * Represents the Hoyolab API client.
 *
 * @class
 * @category Main
 */
export class HoyoWiki {
  /**
   * The language used for API responses.
   */
  public lang: LanguageEnum;

  /**
   * The HoyoLab API client for Honkai Star Rail Wiki.
   * @type {HSRWiki}
   * @readonly
   */
  public hsr: HSRWiki;

  /**
   * Creates a new instance of `Wiki HoyoLab`.
   *
   * @constructor
   * @param {IHoyolabOptions} options - The options to initialize the `Hoyolab` instance.
   * @throws {HoyoAPIError} If `ltuid` or `ltoken` keys are missing in the `ICookie` object.
   *
   * @remarks
   * Because CookieTokenV2 has a short expiration time and cannot be refreshed so far.
   * It is evident that every few days, when logging in, it always requests authentication first.
   * Therefore, this method that uses CookieTokenV2 is not suitable if filled statically.
   */
  constructor(options: IHoyoWikiOptions) {
    // Parse language to prevent language error
    options.lang = Language.parseLang(options.lang);

    /**
     * The language used for API responses.
     * @type {LanguageEnum}
     */
    this.lang = options.lang;

    /**
     * The HoyoLab API client for Honkai Star Rail Wiki.
     * @type {HSRWiki}
     */
    this.hsr = new HSRWiki(this.lang);
  }
}
