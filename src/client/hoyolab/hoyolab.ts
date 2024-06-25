import { Cookie, ICookie } from '../../cookie';
import { Language, LanguageEnum } from '../../language';
import { HTTPRequest } from '../../request';
import { GAME_RECORD_CARD_API } from '../../routes';
import { IGameRecordCard, IHoyolabOptions } from './hoyolab.interface';

/**
 * Represents the Hoyolab API client.
 *
 * @class
 * @category Main
 */
export class Hoyolab {
  /**
   * The parsed ICookie object used to authenticate requests.
   */
  readonly cookie: ICookie;

  /**
   * The underlying `Request` object used to make HTTP requests.
   */
  readonly request: HTTPRequest;

  /**
   * The language used for API responses.
   */
  public lang: LanguageEnum;

  /**
   * Creates a new instance of `Hoyolab`.
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
  constructor(options: IHoyolabOptions) {
    /**
     * The parsed ICookie object used to authenticate requests.
     * @type {ICookie}
     */
    const cookie: ICookie =
      typeof options.cookie === 'string'
        ? Cookie.parseCookieString(options.cookie)
        : options.cookie;

    this.cookie = cookie;

    if (!options.lang) {
      options.lang = Language.parseLang(cookie.mi18nLang);
    }

    // Parse language to prevent language error
    options.lang = Language.parseLang(options.lang);

    /**
     * The underlying `Request` object used to make HTTP requests.
     * @type {Request}
     */
    this.request = new HTTPRequest(Cookie.parseCookie(this.cookie));
    this.request.setLang(options.lang);

    /**
     * The language used for API responses.
     * @type {LanguageEnum}
     */
    this.lang = options.lang;
  }

  /**
   * Retrieves the game record card
   *
   * @async
   * @returns {Promise<IGameRecordCard>} The game account.
   */
  async gameRecordCard(): Promise<IGameRecordCard[]> {
    /* c8 ignore start */
    this.request.setQueryParams({
      uid: this.cookie.ltuidV2,
    });

    const { response: res } = await this.request.send(GAME_RECORD_CARD_API);

    return (res as any).data.list as IGameRecordCard[];
  }
  /* c8 ignore stop */
}
