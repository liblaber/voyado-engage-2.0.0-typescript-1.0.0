// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  PagedResultOfAllBonusCheckModel,
  PagedResultOfAvailableBonusCheckModel,
  PagedResultOfRedeemedBonusCheckModel,
  RedeemedBonusCheckModel,
  pagedResultOfAllBonusCheckModelResponse,
  pagedResultOfAvailableBonusCheckModelResponse,
  pagedResultOfRedeemedBonusCheckModelResponse,
  redeemedBonusCheckModelResponse,
} from '../common';
import {
  BonusChecksGetAvailableBonusChecksParams,
  BonusChecksGetBonusChecksForContactParams,
  BonusChecksGetRedeemedBonusChecksForContactParams,
} from './request-params';

export class BonuschecksService extends BaseService {
  /**
 * Get all bonus checks for a contact. Expired, redeemed and available.
The result can be paginated, using the offset and
count query parameters.
 * @param {string} contactId - Contact identifier (GUID).
 * @param {number} [offset] - The first item to retrieve. (Default value 0)
 * @param {number} [count] - The max number of items to retrieve. (Default value 100)
 * @returns {Promise<HttpResponse<PagedResultOfAllBonusCheckModel>>} OK
 */
  async bonusChecksGetBonusChecksForContact(
    contactId: string,
    params?: BonusChecksGetBonusChecksForContactParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PagedResultOfAllBonusCheckModel>> {
    const path = this.client.buildPath('/api/v2/contacts/{contactId}/bonuschecks', { contactId: contactId });
    const options: any = {
      responseSchema: pagedResultOfAllBonusCheckModelResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.offset) {
      options.queryParams['offset'] = params?.offset;
    }
    if (params?.count) {
      options.queryParams['count'] = params?.count;
    }
    return this.client.get(path, options);
  }

  /**
 * Get redeemed bonus checks for a contact.
The result can be paginated, using the offset and
count query parameters.
 * @param {string} contactId - Contact identifier (GUID).
 * @param {number} [offset] - The first item to retrieve. (Default value 0)
 * @param {number} [count] - The max number of items to retrieve. (Default value 100)
 * @returns {Promise<HttpResponse<PagedResultOfRedeemedBonusCheckModel>>} OK
 */
  async bonusChecksGetRedeemedBonusChecksForContact(
    contactId: string,
    params?: BonusChecksGetRedeemedBonusChecksForContactParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PagedResultOfRedeemedBonusCheckModel>> {
    const path = this.client.buildPath('/api/v2/contacts/{contactId}/bonuschecks/redeemed', { contactId: contactId });
    const options: any = {
      responseSchema: pagedResultOfRedeemedBonusCheckModelResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.offset) {
      options.queryParams['offset'] = params?.offset;
    }
    if (params?.count) {
      options.queryParams['count'] = params?.count;
    }
    return this.client.get(path, options);
  }

  /**
 * Get available bonus checks for a contact. 

Expired and redeemed bonus checks are excluded

The result can be paginated, using the *offset* 
and *count* query parameters.
 * @param {string} contactId - Contact identifier (GUID).
 * @param {number} [offset] - Number of items to skip. (Default value 0)
 * @param {number} [count] - Max number of items to take. (Default value 100)
 * @returns {Promise<HttpResponse<PagedResultOfAvailableBonusCheckModel>>} OK
 */
  async bonusChecksGetAvailableBonusChecks(
    contactId: string,
    params?: BonusChecksGetAvailableBonusChecksParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PagedResultOfAvailableBonusCheckModel>> {
    const path = this.client.buildPath('/api/v2/contacts/{contactId}/bonuschecks/available', { contactId: contactId });
    const options: any = {
      responseSchema: pagedResultOfAvailableBonusCheckModelResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.offset) {
      options.queryParams['offset'] = params?.offset;
    }
    if (params?.count) {
      options.queryParams['count'] = params?.count;
    }
    return this.client.get(path, options);
  }

  /**
   * Redeem a bonus check for a certain contact.
   * @param {string} contactId - Contact identifier (GUID).
   * @param {string} bonusCheckId - Bonus check identifier.
   * @returns {Promise<HttpResponse<RedeemedBonusCheckModel>>} OK
   */
  async bonusChecksRedeemBonusCheck(
    contactId: string,
    bonusCheckId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<RedeemedBonusCheckModel>> {
    const path = this.client.buildPath('/api/v2/contacts/{contactId}/bonuschecks/{bonusCheckId}/redeem', {
      contactId: contactId,
      bonusCheckId: bonusCheckId,
    });
    const options: any = {
      responseSchema: redeemedBonusCheckModelResponse,
      requestSchema: z.any(),
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.post(path, options);
  }
}