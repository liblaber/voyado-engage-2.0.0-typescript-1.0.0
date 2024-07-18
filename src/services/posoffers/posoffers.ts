import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import {
  PagedResultOfAllLoyaltyBarClaimModel,
  pagedResultOfAllLoyaltyBarClaimModelResponse,
} from './models/paged-result-of-all-loyalty-bar-claim-model';
import {
  PagedResultOfAvailableLoyaltyBarClaimModel,
  pagedResultOfAvailableLoyaltyBarClaimModelResponse,
} from './models/paged-result-of-available-loyalty-bar-claim-model';
import {
  PosOfferGetAllPosOffersForContactParams,
  PosOfferGetAvailablePosOffersForContactParams,
} from './request-params';
import {
  RedeemedLoyaltyBarClaimModel,
  redeemedLoyaltyBarClaimModelResponse,
} from './models/redeemed-loyalty-bar-claim-model';

export class PosoffersService extends BaseService {
  /**
 * Get all POS offers for a contact. Expired, redeemed and available.

Finds the contact by using a key value other than Contact Id. This can
only be used for contact types with exactly ONE key.
The contact key attribute is configured for each Voyado instance.
 * @param {string} keyValue - Key value, e.g. ssn, externalId, memberNumber, phone number etc.
 * @returns {Promise<HttpResponse<PagedResultOfAllLoyaltyBarClaimModel>>} OK
 */
  async posOfferGetAllPosOffersByKey(
    keyValue: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PagedResultOfAllLoyaltyBarClaimModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/bykey/{keyValue}/posoffers/all',
      config: this.config,
      responseSchema: pagedResultOfAllLoyaltyBarClaimModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('keyValue', keyValue);
    return this.client.call(request);
  }

  /**
 * Get all available POS offers for a contact. 
Expired and redeemed offers are excluded.

Finds the contact by using a key value other than Contact Id. This can
only be used for contact types with exactly ONE key.
The contact key attribute is configured for each Voyado instance.
 * @param {string} keyValue - Key value, e.g. ssn, externalId, memberNumber, phone number etc.
 * @returns {Promise<HttpResponse<PagedResultOfAvailableLoyaltyBarClaimModel>>} OK
 */
  async posOfferGetAvailablePosOffersByKey(
    keyValue: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PagedResultOfAvailableLoyaltyBarClaimModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/bykey/{keyValue}/posoffers/available',
      config: this.config,
      responseSchema: pagedResultOfAvailableLoyaltyBarClaimModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('keyValue', keyValue);
    return this.client.call(request);
  }

  /**
 * Get all POS offers for a contact. Expired, redeemed and available.

Finds the contact by using a key value other than Contact Id. This can
only be used for contact types with exactly ONE key.
The contact key attribute is configured for each Voyado instance.
 * @param {string} keyValue - Key value, e.g. ssn, externalId, memberNumber, phone number etc.
 * @param {string} contactType - Contact type, e.g. "member".
 * @returns {Promise<HttpResponse<PagedResultOfAllLoyaltyBarClaimModel>>} OK
 */
  async posOfferGetAllPosOffersByContactTypeAndKey(
    keyValue: string,
    contactType: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PagedResultOfAllLoyaltyBarClaimModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactType}/bykey/{keyValue}/posoffers/all',
      config: this.config,
      responseSchema: pagedResultOfAllLoyaltyBarClaimModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('keyValue', keyValue);
    request.addPathParam('contactType', contactType);
    return this.client.call(request);
  }

  /**
 * Get all available POS offers for a contact. 
Expired and redeemed offers are excluded.

Finds the contact by using a key value other than Contact Id. This can
only be used for contact types with exactly ONE key.
The contact key attribute is configured for each Voyado instance.
 * @param {string} keyValue - Key value, e.g. ssn, externalId, memberNumber, phone number etc.
 * @param {string} contactType - Contact type, e.g. "member".
 * @returns {Promise<HttpResponse<PagedResultOfAvailableLoyaltyBarClaimModel>>} OK
 */
  async posOfferGetAvailablePosOffersByContactTypeAndKey(
    keyValue: string,
    contactType: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PagedResultOfAvailableLoyaltyBarClaimModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactType}/bykey/{keyValue}/posoffers/available',
      config: this.config,
      responseSchema: pagedResultOfAvailableLoyaltyBarClaimModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('keyValue', keyValue);
    request.addPathParam('contactType', contactType);
    return this.client.call(request);
  }

  /**
 * Get all POS offers for a contact. Expired, redeemed and available.
The result can be paginated, using the offset and
count query parameters.
Note: *expiresOn* is obsolete and is always **null**
 * @param {string} contactId - Contact identifier (GUID).
 * @param {number} [offset] - The first item to retrieve. (Default value 0)
 * @param {number} [count] - The max number of items to retrieve. (Default value 100)
 * @returns {Promise<HttpResponse<PagedResultOfAllLoyaltyBarClaimModel>>} OK
 */
  async posOfferGetAllPosOffersForContact(
    contactId: string,
    params?: PosOfferGetAllPosOffersForContactParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PagedResultOfAllLoyaltyBarClaimModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactId}/posoffers/all',
      config: this.config,
      responseSchema: pagedResultOfAllLoyaltyBarClaimModelResponse,
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
 * Get all available POS offers for a contact. 
Expired and redeemed offers are excluded.

The result can be paginated, using the offset and
count query parameters.
 * @param {string} contactId - Contact identifier (GUID).
 * @param {number} [offset] - The first item to retrieve. (Default value 0)
 * @param {number} [count] - The max number of items to retrieve. (Default value 100)
 * @returns {Promise<HttpResponse<PagedResultOfAvailableLoyaltyBarClaimModel>>} OK
 */
  async posOfferGetAvailablePosOffersForContact(
    contactId: string,
    params?: PosOfferGetAvailablePosOffersForContactParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PagedResultOfAvailableLoyaltyBarClaimModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactId}/posoffers/available',
      config: this.config,
      responseSchema: pagedResultOfAvailableLoyaltyBarClaimModelResponse,
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
   * Redeems a POS offer for a Contact using the internal Contact Id
   * @param {string} id - The id returned from the get operation (GUID)
   * @param {string} contactId - Contact identifier (GUID).
   * @returns {Promise<HttpResponse<RedeemedLoyaltyBarClaimModel>>} OK
   */
  async posOfferRedeem(
    id: string,
    contactId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<RedeemedLoyaltyBarClaimModel>> {
    const request = new Request({
      method: 'POST',
      path: '/api/v2/contacts/{contactId}/posoffers/{id}/redeem',
      config: this.config,
      responseSchema: redeemedLoyaltyBarClaimModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('id', id);
    request.addPathParam('contactId', contactId);
    return this.client.call(request);
  }

  /**
 * Redeems a POS offer for a Contact using the key for the contact type

Finds the contact by using a key value other than Contact Id. This can
only be used for contact types with exactly ONE key.
The contact key attribute is configured for each Voyado instance.
 * @param {string} id - The id returned from the get operation (GUID)
 * @param {string} keyValue - Key value, e.g. ssn, externalId, memberNumber, phone number etc.
 * @returns {Promise<HttpResponse<RedeemedLoyaltyBarClaimModel>>} OK
 */
  async posOfferRedeemByKey(
    id: string,
    keyValue: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<RedeemedLoyaltyBarClaimModel>> {
    const request = new Request({
      method: 'POST',
      path: '/api/v2/contacts/bykey/{keyValue}/posoffers/{id}/redeem',
      config: this.config,
      responseSchema: redeemedLoyaltyBarClaimModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('id', id);
    request.addPathParam('keyValue', keyValue);
    return this.client.call(request);
  }

  /**
 * Redeems a POS offer for a Contact using the key for the contact type

Finds the contact by using a key value other than Contact Id. This can
only be used for contact types with exactly ONE key.
The contact key attribute is configured for each Voyado instance.
 * @param {string} id - The id returned from the get operation (GUID)
 * @param {string} keyValue - Key value, e.g. ssn, externalId, memberNumber, phone number etc.
 * @param {string} contactType - Contact type, e.g. "member" or "contact".
 * @returns {Promise<HttpResponse<RedeemedLoyaltyBarClaimModel>>} OK
 */
  async posOfferRedeemByContactTypeAndKey(
    id: string,
    keyValue: string,
    contactType: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<RedeemedLoyaltyBarClaimModel>> {
    const request = new Request({
      method: 'POST',
      path: '/api/v2/contacts/{contactType}/bykey/{keyValue}/posoffers/{id}/redeem',
      config: this.config,
      responseSchema: redeemedLoyaltyBarClaimModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('id', id);
    request.addPathParam('keyValue', keyValue);
    request.addPathParam('contactType', contactType);
    return this.client.call(request);
  }
}
