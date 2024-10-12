import { Cookie, ICookie } from '../../cookie';
import { Language, LanguageEnum } from '../../language';
import { DailyModule } from '../../module/daily';
import { RedeemModule } from '../../module/redeem';
import { HTTPRequest } from '../../request';
import { DEFAULT_REFERER } from '../../routes';
import { GamesEnum } from '../hoyolab';
import { ZzzRecordModule } from './record';
import { getZzzRegion } from './zzz.helper';
import { IZzzOptions } from './zzz.interface';

/**
 * Class representing the Zenless Zone Zero game.
 *
 * @public
 * @class
 * @category Main
 */
export class ZenlessZoneZero {
  /**
   * The Daily module for the Zenless Zone Zero game.
   *
   */
  readonly daily: DailyModule;

  /**
   * The Redeem module for the Zenless Zone Zero game.
   *
   */
  readonly redeem: RedeemModule;

  /**
   * The Record module for the Zenless Zone Zero game.
   *
   */
  readonly record: ZzzRecordModule;
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
   * The UID of the Zenless Zone Zero account.
   *
   */
  readonly uid: number | null;

  /**
   * The region of the Zenless Zone Zero account.
   *
   */
  readonly region: string | null;

  /**
   * The language of the Zenless Zone Zero account.
   *
   */
  private lang: LanguageEnum;

  /**
   * Create a new instance of ZenlessZoneZero.
   *
   * @constructor
   * @param {IZzzOptions} options - The options for the ZenlessZoneZero instance.
   */
  constructor(options: IZzzOptions) {
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
    this.request.setRequestHeaders('x-rpc-signgame', 'zzz');

    this.uid = options.uid ?? null;
    this.region = this.uid !== null ? getZzzRegion(this.uid) : null;
    this.lang = options.lang;

    this.daily = new DailyModule(
      this.request,
      this.lang,
      GamesEnum.ZENLESS_ZONE_ZERO,
      this.region
    );
    this.redeem = new RedeemModule(
      this.request,
      this.lang,
      GamesEnum.ZENLESS_ZONE_ZERO,
      this.region,
      this.uid
    );
    this.record = new ZzzRecordModule();
    // this.request,
    // this.lang,
    // this.region,
    // this.uid
  }

  /**
   * Retrieves daily information.
   *
   * @alias {@link DailyModule.info | DailyModule.info }
   * @deprecated Use through { @link ZenlessZoneZero.daily | ZenlessZoneZero.daily.info() } instead
   */
  dailyInfo() {
    /* c8 ignore next 3 */
    return this.daily.info();
  }

  /**
   *
   * @alias {@link DailyModule.rewards | DailyModule.rewards }
   * @deprecated Use through { @link ZenlessZoneZero.daily | ZenlessZoneZero.daily.rewards() } instead
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
   * @deprecated Use through { @link ZenlessZoneZero.daily | ZenlessZoneZero.daily.reward() } instead
   */
  dailyReward(day: number | null = null) {
    /* c8 ignore next 3 */
    return this.daily.reward(day);
  }

  /**
   * Claim current reward
   *
   * @alias {@link DailyModule.claim | DailyModule.claim }
   * @deprecated Use through { @link ZenlessZoneZero.daily | ZenlessZoneZero.daily.claim() } instead
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
   * @deprecated Use through { @link ZenlessZoneZero.redeem | ZenlessZoneZero.redeem.claim() } instead
   */
  redeemCode(code: string) {
    /* c8 ignore next 3 */
    return this.redeem.claim(code);
  }
}
