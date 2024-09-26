import { LanguageEnum } from '../../language';

/**
 * Represents the options for accessing the Hoyolab API.
 *
 * @interface
 */
export interface IHoyoWikiOptions {
  /**
   * The language to use for the request. This should be a value of {@link LanguageEnum}.
   */
  lang?: LanguageEnum;
}
