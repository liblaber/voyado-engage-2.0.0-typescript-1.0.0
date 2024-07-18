import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import {
  PagedResultOfAllBonusCheckModel,
  pagedResultOfAllBonusCheckModelResponse,
} from './models/paged-result-of-all-bonus-check-model';
import {
  BonusChecksGetAvailableBonusChecksParams,
  BonusChecksGetBonusChecksForContactParams,
  BonusChecksGetRedeemedBonusChecksForContactParams,
} from './request-params';
import {
  PagedResultOfRedeemedBonusCheckModel,
  pagedResultOfRedeemedBonusCheckModelResponse,
} from './models/paged-result-of-redeemed-bonus-check-model';
import {
  PagedResultOfAvailableBonusCheckModel,
  pagedResultOfAvailableBonusCheckModelResponse,
} from './models/paged-result-of-available-bonus-check-model';
import { RedeemedBonusCheckModel, redeemedBonusCheckModelResponse } from './models/redeemed-bonus-check-model';

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
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactId}/bonuschecks',
      config: this.config,
      responseSchema: pagedResultOfAllBonusCheckModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addQueryParam('offset', params?.offset);
    request.addQueryParam('count', params?.count);
    return this.client.call(request);
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
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactId}/bonuschecks/redeemed',
      config: this.config,
      responseSchema: pagedResultOfRedeemedBonusCheckModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addQueryParam('offset', params?.offset);
    request.addQueryParam('count', params?.count);
    return this.client.call(request);
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
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactId}/bonuschecks/available',
      config: this.config,
      responseSchema: pagedResultOfAvailableBonusCheckModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addQueryParam('offset', params?.offset);
    request.addQueryParam('count', params?.count);
    return this.client.call(request);
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
    const request = new Request({
      method: 'POST',
      path: '/api/v2/contacts/{contactId}/bonuschecks/{bonusCheckId}/redeem',
      config: this.config,
      responseSchema: redeemedBonusCheckModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addPathParam('bonusCheckId', bonusCheckId);
    return this.client.call(request);
  }
}
