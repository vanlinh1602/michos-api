import { HoyoAPIError } from '../../../../error';
import { LanguageEnum } from '../../../../language';
import { HTTPRequest } from '../../../../request';
import {
  HOYO_WIKI_REFERER,
  HSR_WIKI_ENTRY_PAGE,
  HSR_WIKI_ENTRY_PAGE_LIST,
  HSR_WIKI_MENU_FILTERS,
} from '../../../../routes/wiki';
import {
  HSR_Wiki_Character_Detail,
  HSR_Wiki_Charaters,
  HSR_Wiki_LightCone_Detail,
  HSR_Wiki_LightCones,
  HSR_Wiki_MenuFilter,
  HSR_Wiki_Relic_Detail,
  HSR_Wiki_Relics,
  HSRMenuEnum,
} from './interfaces';

/**
 * HIRecordModule class provides methods to interact with Honkai Impact record module endpoints.
 *
 * @class
 * @internal
 * @category Module
 */
export class HSRWiki {
  /**
   * The underlying `Request` object used to make HTTP requests.
   */
  private readonly request: HTTPRequest;

  /**
   * Creates an instance of HSRWikiModule.
   *
   * @param lang The language enum value.
   */
  constructor(lang: LanguageEnum) {
    this.request = new HTTPRequest();
    this.request.setLang(lang);
    this.request.setReferer(HOYO_WIKI_REFERER);
    this.request.setRequestHeaders('X-Rpc-Wiki_app', 'hsr');
  }

  /**
   *
   * @param {HSRFilterEnum} id The menu filter ID.
   * @returns {Promise<HSR_Wiki_MenuFilter[]>} A Promise that resolves to an array of HSR menu filters.
   * @throws {HoyoAPIError} if the region or UID parameters are missing or failed to be filled.
   * @throws {HoyoAPIError} if failed to retrieve data, please double-check the provided UID.
   */
  async menuFilters(
    id: HSRMenuEnum = HSRMenuEnum.CHARACTER
  ): Promise<HSR_Wiki_MenuFilter[]> {
    this.request
      .setQueryParams({
        menu_id: id,
      })
      .setDs(true);

    const {
      response: res,
      params,
      body,
      headers,
    } = await this.request.send(HSR_WIKI_MENU_FILTERS);

    if (res.retcode !== 0) {
      throw new HoyoAPIError(
        res.message ?? 'Failed to retrieve data',
        res.retcode,
        {
          response: res,
          request: {
            body,
            headers,
            params,
          },
        }
      );
    }

    const { filters } = res.data as { filters: HSR_Wiki_MenuFilter[] };
    return filters;
  }

  /**
   *
   * @returns {Promise<HSR_Wiki_Charaters[]>} A Promise that resolves to an array of HSR characters.
   * @throws {HoyoAPIError} if the region or UID parameters are missing or failed to be filled.
   * @throws {HoyoAPIError} if failed to retrieve data, please double-check the provided UID.
   */
  async characters(
    page_num: number = 1,
    page_size: number = 30
  ): Promise<HSR_Wiki_Charaters[]> {
    this.request
      .setBody({
        filters: [],
        menu_id: HSRMenuEnum.CHARACTER,
        page_num,
        page_size,
      })
      .setDs(true);

    const {
      response: res,
      params,
      body,
      headers,
    } = await this.request.send(HSR_WIKI_ENTRY_PAGE_LIST, 'POST');

    if (res.retcode !== 0) {
      throw new HoyoAPIError(
        res.message ?? 'Failed to retrieve data',
        res.retcode,
        {
          response: res,
          request: {
            body,
            headers,
            params,
          },
        }
      );
    }

    const { list } = res.data as { list: HSR_Wiki_Charaters[]; total: string };
    return list;
  }

  /**
   *
   * @param {string} id The character ID.
   * @returns {Promise<HSR_Wiki_Character_Detail>} A Promise that resolves to Character Detail.
   * @throws {HoyoAPIError} if the region or UID parameters are missing or failed to be filled.
   * @throws {HoyoAPIError} if failed to retrieve data, please double-check the provided UID.
   */
  async characterDetail(id: string): Promise<HSR_Wiki_Character_Detail> {
    this.request
      .setQueryParams({
        entry_page_id: id,
      })
      .setDs(true);

    const {
      response: res,
      params,
      body,
      headers,
    } = await this.request.send(HSR_WIKI_ENTRY_PAGE);

    if (res.retcode !== 0) {
      throw new HoyoAPIError(
        res.message ?? 'Failed to retrieve data',
        res.retcode,
        {
          response: res,
          request: {
            body,
            headers,
            params,
          },
        }
      );
    }

    const { page } = res.data as { page: HSR_Wiki_Character_Detail };
    return page;
  }

  /**
   *
   * @returns {Promise<HSR_Wiki_LightCones[]>} A Promise that resolves to an array of HSR light cones.
   * @throws {HoyoAPIError} if the region or UID parameters are missing or failed to be filled.
   * @throws {HoyoAPIError} if failed to retrieve data, please double-check the provided UID.
   */
  async lightCones(
    page_num: number = 1,
    page_size: number = 30
  ): Promise<HSR_Wiki_LightCones[]> {
    this.request
      .setBody({
        filters: [],
        menu_id: HSRMenuEnum.LIGHT_CONE,
        page_num,
        page_size,
      })
      .setDs(true);

    const {
      response: res,
      params,
      body,
      headers,
    } = await this.request.send(HSR_WIKI_ENTRY_PAGE_LIST, 'POST');

    if (res.retcode !== 0) {
      throw new HoyoAPIError(
        res.message ?? 'Failed to retrieve data',
        res.retcode,
        {
          response: res,
          request: {
            body,
            headers,
            params,
          },
        }
      );
    }

    const { list } = res.data as { list: HSR_Wiki_LightCones[]; total: string };
    return list;
  }

  /**
   *
   * @param {string} id The Light Cone ID.
   * @returns {Promise<HSR_Wiki_LightCone_Detail>} A Promise that resolves to Light Cone Detail.
   * @throws {HoyoAPIError} if the region or UID parameters are missing or failed to be filled.
   * @throws {HoyoAPIError} if failed to retrieve data, please double-check the provided UID.
   */
  async lightConeDetail(id: string): Promise<HSR_Wiki_LightCone_Detail> {
    this.request
      .setQueryParams({
        entry_page_id: id,
      })
      .setDs(true);

    const {
      response: res,
      params,
      body,
      headers,
    } = await this.request.send(HSR_WIKI_ENTRY_PAGE);

    if (res.retcode !== 0) {
      throw new HoyoAPIError(
        res.message ?? 'Failed to retrieve data',
        res.retcode,
        {
          response: res,
          request: {
            body,
            headers,
            params,
          },
        }
      );
    }

    const { page } = res.data as { page: HSR_Wiki_LightCone_Detail };
    return page;
  }

  /**
   *
   * @returns {Promise<HSR_Wiki_Relics[]>} A Promise that resolves to an array of HSR Relics.
   * @throws {HoyoAPIError} if the region or UID parameters are missing or failed to be filled.
   * @throws {HoyoAPIError} if failed to retrieve data, please double-check the provided UID.
   */
  async relics(
    page_num: number = 1,
    page_size: number = 30
  ): Promise<HSR_Wiki_Relics[]> {
    this.request
      .setBody({
        filters: [],
        menu_id: HSRMenuEnum.RELIC,
        page_num,
        page_size,
      })
      .setDs(true);

    const {
      response: res,
      params,
      body,
      headers,
    } = await this.request.send(HSR_WIKI_ENTRY_PAGE_LIST, 'POST');

    if (res.retcode !== 0) {
      throw new HoyoAPIError(
        res.message ?? 'Failed to retrieve data',
        res.retcode,
        {
          response: res,
          request: {
            body,
            headers,
            params,
          },
        }
      );
    }

    const { list } = res.data as { list: HSR_Wiki_Relics[]; total: string };
    return list;
  }

  /**
   *
   * @param {string} id The Relic ID.
   * @returns {Promise<HSR_Wiki_Relic_Detail>} A Promise that resolves to Relic Detail.
   * @throws {HoyoAPIError} if the region or UID parameters are missing or failed to be filled.
   * @throws {HoyoAPIError} if failed to retrieve data, please double-check the provided UID.
   */
  async relicDetail(id: string): Promise<HSR_Wiki_Relic_Detail> {
    this.request
      .setQueryParams({
        entry_page_id: id,
      })
      .setDs(true);

    const {
      response: res,
      params,
      body,
      headers,
    } = await this.request.send(HSR_WIKI_ENTRY_PAGE);

    if (res.retcode !== 0) {
      throw new HoyoAPIError(
        res.message ?? 'Failed to retrieve data',
        res.retcode,
        {
          response: res,
          request: {
            body,
            headers,
            params,
          },
        }
      );
    }

    const { page } = res.data as { page: HSR_Wiki_Relic_Detail };
    return page;
  }
}
