import { Cookie, ICookie } from '../../cookie';
import { Language, LanguageEnum } from '../../language';
import { DailyModule } from '../../module/daily';
import { RedeemModule } from '../../module/redeem';
import { HTTPRequest } from '../../request';
import { DEFAULT_REFERER } from '../../routes';
import { GamesEnum } from '../hoyolab';
import { getHsrRegion } from './hsr.helper';
import { IHsrOptions } from './hsr.interface';
import { HSRRecordModule } from './record';

/**
 * Class representing the Honkai Star Rail game.
 *
 * @public
 * @class
 * @category Main
 */
export class HonkaiStarRail {
  /**
   * The Daily module for the Honkai Star Rail game.
   *
   */
  readonly daily: DailyModule;

  /**
   * The Redeem module for the Honkai Star Rail game.
   *
   */
  readonly redeem: RedeemModule;

  /**
   * The `HSRRecordModule` object provides an interface to interact with the user record feature in Honkai Star Rails.
   *
   */
  readonly record: HSRRecordModule;

  /**
   * The cookie used for authentication.
   *
   */
  readonly cookie: ICookie;

  /**
   * The request object used to make HTTP requests.
   *
   */
  private request: HTTPRequest;

  /**
   * The UID of the Honkai Star Rail account.
   *
   */
  readonly uid: number | null;

  /**
   * The region of the Honkai Star Rail account.
   *
   */
  readonly region: string | null;

  /**
   * The language of the Honkai Star Rail account.
   *
   */
  private lang: LanguageEnum;

  /**
   * Create a new instance of HonkaiStarRail.
   *
   * @constructor
   * @param {IHsrOptions} options - The options for the HonkaiStarRail instance.
   */
  constructor(options: IHsrOptions) {
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

    this.request = new HTTPRequest(Cookie.parseCookie(this.cookie));
    this.request.setReferer(DEFAULT_REFERER);
    this.request.setLang(options.lang);

    this.uid = options.uid ?? null;
    this.region = this.uid !== null ? getHsrRegion(this.uid) : null;
    this.lang = options.lang;

    this.daily = new DailyModule(
      this.request,
      this.lang,
      GamesEnum.HONKAI_STAR_RAIL,
      this.region
    );
    this.redeem = new RedeemModule(
      this.request,
      this.lang,
      GamesEnum.HONKAI_STAR_RAIL,
      this.region,
      this.uid
    );
    this.record = new HSRRecordModule(
      this.request,
      this.lang,
      this.region,
      this.uid
    );
  }

  /**
   * Retrieves daily information.
   *
   * @alias {@link DailyModule.info | DailyModule.info }
   * @deprecated Use through { @link HonkaiStarRail.daily | HonkaiStarRail.daily.info() } instead
   */
  dailyInfo() {
    /* c8 ignore next 3 */
    return this.daily.info();
  }

  /**
   *
   * @alias {@link DailyModule.rewards | DailyModule.rewards }
   * @deprecated Use through { @link HonkaiStarRail.daily | HonkaiStarRail.daily.rewards() } instead
   */
  dailyRewards() {
    /* c8 ignore next 3 */
    return this.daily.rewards();
  }

  /**
   * Fetch reward from daily login based on day
   *
   * @param day number | null
   * @alias {@link DailyModule.reward | DailyModule.reward }
   * @deprecated Use through { @link HonkaiStarRail.daily | HonkaiStarRail.daily.reward() } instead
   */
  dailyReward(day: number | null = null) {
    /* c8 ignore next 3 */
    return this.daily.reward(day);
  }

  /**
   * Claim current reward
   *
   * @alias {@link DailyModule.claim | DailyModule.claim }
   * @deprecated Use through { @link HonkaiStarRail.daily | HonkaiStarRail.daily.claim() } instead
   */
  dailyClaim() {
    /* c8 ignore next 3 */
    return this.daily.claim();
  }

  /**
   * Redeem Code
   *
   * @param code string
   * @alias {@link RedeemModule.claim | RedeemModule.claim }
   * @deprecated Use through { @link HonkaiStarRail.redeem | HonkaiStarRail.redeem.claim() } instead
   */
  redeemCode(code: string) {
    /* c8 ignore next 3 */
    return this.redeem.claim(code);
  }
}
