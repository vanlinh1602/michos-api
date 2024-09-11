import { HoyoAPIError } from '../error';
import { Language } from '../language';
import { toCamelCase, toSnakeCase } from './cookie.helper';
import { ICookie } from './cookie.interface';

/**
 * Represents a cookie object.
 *
 * @class
 * @category Main
 */
export class Cookie {
  /**
   * Parses a cookie string and returns a parsed ICookie object.
   *
   * @param cookieString - The cookie string to be parsed.
   * @returns {string} - A parsed ICookie object.
   * @throws {HoyoAPIError} when ltuid or ltoken keys are not found in the cookie string.
   */
  static parseCookieString(cookieString: string): ICookie {
    const cookies: Map<string, any> = new Map();

    const keys: string[] = [
      'ltoken',
      'ltoken_v2',
      'ltuid',
      'ltuid_v2',
      'account_id',
      'cookie_token',
      'account_id_v2',
      'account_mid_v2',
      'cookie_token_v2',
      'mi18nLang',
      'ltmid_v2',
    ];

    cookieString.split(';').forEach((item) => {
      const [key, value] = item.split('=');
      if (keys.includes(key.trim())) {
        const camelCaseKey = toCamelCase(key.trim());
        const decodedValue = decodeURIComponent(value).trim();
        cookies.set(camelCaseKey, decodedValue);
        if (
          ['ltuid', 'ltuidV2', 'accountId', 'accountIdV2'].includes(
            camelCaseKey
          )
        ) {
          cookies.set(camelCaseKey, parseInt(cookies.get(camelCaseKey), 10));
        } else if (key === 'mi18nLang') {
          cookies.set(
            key,
            decodedValue || Language.parseLang(cookies.get(key))
          );
        }
      }
    });

    const ltuid = cookies.get('ltuid');
    const accountId = cookies.get('accountId');
    const accountIdV2 = cookies.get('accountIdV2');

    if (ltuid && !accountId) {
      cookies.set('accountId', ltuid);
    } else if (!ltuid && accountId) {
      cookies.set('ltuid', accountId);
    }

    if (!accountIdV2 && (accountId || ltuid) !== null) {
      cookies.set('accountIdV2', accountId || ltuid);
    }

    if (!cookies.get('ltokenV2') || !cookies.get('ltuidV2')) {
      throw new HoyoAPIError('Cookie key ltuid or ltoken doesnt exist !');
    }

    return Object.fromEntries(cookies) as ICookie;
  }

  /**
   * Converts an `ICookie` object into a cookie string.
   * @param {ICookie} cookie - The `ICookie` object to convert.
   * @returns {string} A string representing the cookie.
   * @throws {HoyoAPIError} If the `ltuid` or `ltoken` key is missing in the `ICookie` object.
   */
  static parseCookie(cookie: ICookie): string {
    if (!cookie.accountId) {
      cookie.accountId = cookie.ltuid;
    }

    const cookies = Object.entries(cookie)
      .map(([key, value]) => {
        /* c8 ignore next 3 */
        if (!value) {
          return undefined;
        }

        if (
          [
            'cookieToken',
            'accountId',
            'cookieTokenV2',
            'accountIdV2',
            'accountMidV2',
            'ltmidV2',
            'ltokenV2',
            'ltuidV2',
          ].includes(key)
        ) {
          key = toSnakeCase(key);
        }
        return `${key}=${value}`;
      })
      .filter((val) => {
        return val !== undefined;
      });

    return cookies.join('; ');
  }
}
