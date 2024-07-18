import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { IApiContact, iApiContactResponse } from './models/i-api-contact';
import {
  BonusPointTransactionsGetBonusPointTransactionsForContactParams,
  ContactBulkCreateContactsInBulkParams,
  ContactBulkGetBulkStatusParams,
  ContactBulkUpdateContactsInBulkParams,
  ContactMessageEmailUnsubscribeContactParams,
  ContactMessageGetLatestMessagesByContactIdParams,
  ContactMessageGetMessagesByContactIdParams,
  ContactMessageSmsUnsubscribeContactParams,
  ContactOverviewGetContactIdAsyncParams,
  ContactsVCreateContactHeaderParamParams,
  ContactsVDeleteWithHeaderParamParams,
  ContactsVGetChangedContactIdsParams,
  ContactsVGetContactByTypeAndKeyValueAsyncParams,
  ContactsVPromoteToMemberParams,
  ContactsVUpdateContactTypeParams,
  OfferPromotionsGetPromotionsForContactParams,
  TransactionsGetTransactionsByContactIdParams,
} from './request-params';
import {
  ProductRecommendationsModel,
  productRecommendationsModelResponse,
} from './models/product-recommendations-model';
import { PurchaseHistorySummary, purchaseHistorySummaryResponse } from './models/purchase-history-summary';
import { ListResultOfApiMessage, listResultOfApiMessageResponse } from './models/list-result-of-api-message';
import { PagedResultOfApiMessage, pagedResultOfApiMessageResponse } from './models/paged-result-of-api-message';
import {
  PagedResultOfTransactionItem,
  pagedResultOfTransactionItemResponse,
} from './models/paged-result-of-transaction-item';
import {
  PagedResultOfBonusPointTransactionModel,
  pagedResultOfBonusPointTransactionModelResponse,
} from './models/paged-result-of-bonus-point-transaction-model';
import { ApiPromotionModel, apiPromotionModelResponse } from './models/api-promotion-model';
import { BoolRequest, boolRequestRequest } from './models/bool-request';
import { ApiAdjustRewardPoints, apiAdjustRewardPointsRequest } from './models/api-adjust-reward-points';
import {
  ApiAdjustRewardPointsResponse1,
  apiAdjustRewardPointsResponse1Response,
} from './models/api-adjust-reward-points-response-1';
import { RedeemBodyModel, redeemBodyModelRequest } from '../common/redeem-body-model';

export class ContactsService extends BaseService {
  /**
 * Get number of approved contacts. 

This is a cached value that will be updated with a 
set frequency (normally once every 20 min).
 * @returns {Promise<HttpResponse<number>>} OK
 */
  async contactsVCount(requestConfig?: RequestConfig): Promise<HttpResponse<number>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/count',
      config: this.config,
      responseSchema: z.number(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    return this.client.call(request);
  }

  /**
 * Get a single contact, using the unique identifier.

The dynamic fields of the response object depend on
the current instance configuration.
 * @param {string} contactId - Contact identifier (GUID).
 * @returns {Promise<HttpResponse<IApiContact>>} OK
 */
  async contactsVGetContactById(contactId: string, requestConfig?: RequestConfig): Promise<HttpResponse<IApiContact>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactId}',
      config: this.config,
      responseSchema: iApiContactResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    return this.client.call(request);
  }

  /**
 * Update one or several fields of a single contact.
Dont send an empty value unless you want it to be empty.
 * @param {string} contactId - Contact identifier (GUID).
 * @returns {Promise<HttpResponse<IApiContact>>} OK
 */
  async contactsVUpdateContactPost(
    contactId: string,
    body: any,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<IApiContact>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/contacts/{contactId}',
      config: this.config,
      responseSchema: iApiContactResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
   *
   * @param {string} contactId - Contact identifier (GUID).
   * @param {string} [source] - Source system identifier (instance configuration)
   * @returns {Promise<HttpResponse<any>>} OK
   */
  async contactsVDeleteWithHeaderParam(
    contactId: string,
    params?: ContactsVDeleteWithHeaderParamParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'DELETE',
      path: '/api/v2/contacts/{contactId}',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addHeaderParam('source', params?.source);
    return this.client.call(request);
  }

  /**
 * Get number of approved contacts of given type. 

This is a cached value that will be updated with a 
set frequency (normally once every 20 min).
 * @param {string} contactType - Id for contact type, e.g. "member" or "contact"
 * @returns {Promise<HttpResponse<number>>} OK
 */
  async contactsVCountByContactType(contactType: string, requestConfig?: RequestConfig): Promise<HttpResponse<number>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactType}/count',
      config: this.config,
      responseSchema: z.number(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactType', contactType);
    return this.client.call(request);
  }

  /**
   *
   * @param {string} batchId - Id from bulk contact import
   * @returns {Promise<HttpResponse<any>>} Status object for batch
   */
  async contactBulkGetBulkStatus(
    params: ContactBulkGetBulkStatusParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/bulk/status',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('batchId', params?.batchId);
    return this.client.call(request);
  }

  /**
 * ! Please be aware that this endpoint is currently usable with either the key value being provided through !
! the path or a query param. Hence there being two of the same endpoints. !
! We recommend that you use the query param version (the first) as it is the more versatile one of the two !

Get a single contact of a certain type, using a key
value that corresponds to the current instance configuration. This can
only be used for contact types with exactly ONE key.

The dynamic fields of the response object depend on
the current configuration.
 * @param {string} contactType - Contact type, e.g. "member".
 * @param {string} keyValue - Key value, e.g. ssn, phone number etc.
 * @returns {Promise<HttpResponse<IApiContact>>} OK
 */
  async contactsVGetContactByTypeAndKeyValueInUrlAsync(
    contactType: string,
    keyValue: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<IApiContact>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactType}/bykey/{keyValue}',
      config: this.config,
      responseSchema: iApiContactResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactType', contactType);
    request.addPathParam('keyValue', keyValue);
    return this.client.call(request);
  }

  /**
   *
   * @param {string} contactId - Contact identifier (GUID).
   * @returns {Promise<HttpResponse<ProductRecommendationsModel>>} OK
   */
  async productRecommendationGetProductRecommendations(
    contactId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ProductRecommendationsModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactId}/productrecommendations',
      config: this.config,
      responseSchema: productRecommendationsModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    return this.client.call(request);
  }

  /**
   * Following summary shows the purchase history for a single contact, over all time, 12 months and 24 months.
   * @param {string} contactId - Contact identifier (GUID)
   * @returns {Promise<HttpResponse<PurchaseHistorySummary>>} OK
   */
  async contactRetailKpiGetPurchaseHistory(
    contactId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PurchaseHistorySummary>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactId}/purchasehistorysummary',
      config: this.config,
      responseSchema: purchaseHistorySummaryResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    return this.client.call(request);
  }

  /**
   * Get back in stock subscriptions for a contact
   * @param {string} contactId -
   * @returns {Promise<HttpResponse<any>>} OK
   */
  async backInStockSubscriptionGetByContactId(
    contactId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<undefined>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactId}/backinstock/subscriptions',
      config: this.config,
      responseSchema: z.undefined(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    return this.client.call(request);
  }

  /**
 * Get a single contact of a certain type, using the
contact's external id.

The dynamic fields of the response object depend on
the current configuration.
 * @param {string} contactType - Contact type, e.g. Member or Contact.
 * @param {string} externalId - External contact id.
 * @returns {Promise<HttpResponse<IApiContact>>} OK
 */
  async contactsVGetContactByExternalIdAsync(
    contactType: string,
    externalId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<IApiContact>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactType}/byexternalid/{externalId}',
      config: this.config,
      responseSchema: iApiContactResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactType', contactType);
    request.addPathParam('externalId', externalId);
    return this.client.call(request);
  }

  /**
 * Get a single contact of a certain type, using a key
value that corresponds to the current instance configuration. This can
only be used for contact types with exactly ONE key.

The dynamic fields of the response object depend on
the current configuration.
 * @param {string} contactType - Contact type, e.g. "member".
 * @param {string} keyValue - Key value, e.g. ssn, phone number etc.
 * @returns {Promise<HttpResponse<IApiContact>>} OK
 */
  async contactsVGetContactByTypeAndKeyValueAsync(
    contactType: string,
    params: ContactsVGetContactByTypeAndKeyValueAsyncParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<IApiContact>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactType}/bykey',
      config: this.config,
      responseSchema: iApiContactResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactType', contactType);
    request.addQueryParam('keyValue', params?.keyValue);
    return this.client.call(request);
  }

  /**
   * Get the latest messages (max 500) a contact has received
   * @param {string} contactId - Contact identifier (GUID).
   * @param {number} [count] - Max number of items to take. (Default value 100, Max value 500)
   * @returns {Promise<HttpResponse<ListResultOfApiMessage>>} OK
   */
  async contactMessageGetLatestMessagesByContactId(
    contactId: string,
    params?: ContactMessageGetLatestMessagesByContactIdParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListResultOfApiMessage>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactId}/messages/latest',
      config: this.config,
      responseSchema: listResultOfApiMessageResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addQueryParam('count', params?.count);
    return this.client.call(request);
  }

  /**
   * Optional offset and number of messages in response.
   * @param {string} contactId - Contact identifier (GUID).
   * @param {number} [offset] - Default value 0
   * @param {number} [count] - Max number of items to take. (Default value 100, max 500)
   * @returns {Promise<HttpResponse<PagedResultOfApiMessage>>} OK
   */
  async contactMessageGetMessagesByContactId(
    contactId: string,
    params?: ContactMessageGetMessagesByContactIdParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PagedResultOfApiMessage>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactId}/messages',
      config: this.config,
      responseSchema: pagedResultOfApiMessageResponse,
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
 * Get all purchase transactions for a single contact with 
optional offset and number of transactions in response.
 * @param {string} contactId - Contact identifier (GUID)
 * @param {number} [offset] - Number of items to skip. (Default value 0)
 * @param {number} [count] - Max number of items to take. (Default value 100)
 * @returns {Promise<HttpResponse<PagedResultOfTransactionItem>>} OK
 */
  async transactionsGetTransactionsByContactId(
    contactId: string,
    params?: TransactionsGetTransactionsByContactIdParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PagedResultOfTransactionItem>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactId}/transactions',
      config: this.config,
      responseSchema: pagedResultOfTransactionItemResponse,
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
   *
   * @param {string} contactId - The contact identifier (GUID).
   * @param {number} [offset] - The first item to retrieve. (Default value 0)
   * @param {number} [count] - The max number of items to retrieve. (Default value 100)
   * @returns {Promise<HttpResponse<PagedResultOfBonusPointTransactionModel>>} OK
   */
  async bonusPointTransactionsGetBonusPointTransactionsForContact(
    contactId: string,
    params?: BonusPointTransactionsGetBonusPointTransactionsForContactParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PagedResultOfBonusPointTransactionModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactId}/bonuspointtransactions',
      config: this.config,
      responseSchema: pagedResultOfBonusPointTransactionModelResponse,
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
   *
   * @param {ChangeType} changeType - Created, Updated or Deleted
   * @param {string} fromDate - Start of timespan (ex 2023-05-04 11:20:00.000)
   * @param {string} [toDate] - End of timespan (Default the current time and date)
   * @returns {Promise<HttpResponse<any>>} OK
   */
  async contactsVGetChangedContactIds(
    params: ContactsVGetChangedContactIdsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/changes',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('changeType', params?.changeType);
    request.addQueryParam('fromDate', params?.fromDate);
    request.addQueryParam('toDate', params?.toDate);
    return this.client.call(request);
  }

  /**
 * Get available promotions for a contact. To filter on redemptionChannelType add it as a query string
?redemptionChannelType=POS
It can be POS, ECOM or OTHER
 * @param {string} contactId - Contact identifier
 * @param {string} [redemptionChannelType] - Filter on redemptionChannelType it can be POS, ECOM or OTHER
 * @returns {Promise<HttpResponse<ApiPromotionModel[]>>} OK
 */
  async offerPromotionsGetPromotionsForContact(
    contactId: string,
    params?: OfferPromotionsGetPromotionsForContactParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ApiPromotionModel[]>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactId}/promotions',
      config: this.config,
      responseSchema: z.array(apiPromotionModelResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addQueryParam('redemptionChannelType', params?.redemptionChannelType);
    return this.client.call(request);
  }

  /**
 * Get the contactId for one (or several) contacts using either:
- email
- socialSecurityNumber
- mobilePhone
- customKey (the customKey must be configured by your supplier)
- any - the any field can contain email, socialSecurityNumber, mobilePhone or the custom key (and are checked in that order)
 * @param {string} [contactType] - 
 * @param {string} [email] - 
 * @param {string} [socialSecurityNumber] - 
 * @param {string} [mobilePhone] - 
 * @param {string} [customKey] - 
 * @param {string} [any] - 
 * @returns {Promise<HttpResponse<string>>} OK
 */
  async contactOverviewGetContactIdAsync(
    params?: ContactOverviewGetContactIdAsyncParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<string>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/id',
      config: this.config,
      responseSchema: z.string(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('contactType', params?.contactType);
    request.addQueryParam('email', params?.email);
    request.addQueryParam('socialSecurityNumber', params?.socialSecurityNumber);
    request.addQueryParam('mobilePhone', params?.mobilePhone);
    request.addQueryParam('customKey', params?.customKey);
    request.addQueryParam('any', params?.any);
    return this.client.call(request);
  }

  /**
 * Create a new, approved contact.

If the contacts key identifier (example: Email) already exists : returns the GUID of the first entry found.
 * @param {string} [source] - Source system identifier (instance configuration)
 * @param {string} [storeExternalId] - The unique id code of the current store (and therefore also the recruited-by store). Not mandatory but strongly recommended.
 * @param {string} [createAsUnapproved] - Contact is not approved on creation. (Default value false)
 * @returns {Promise<HttpResponse<IApiContact>>} Created
 */
  async contactsVCreateContactHeaderParam(
    body: any,
    params?: ContactsVCreateContactHeaderParamParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<IApiContact>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/contacts',
      config: this.config,
      responseSchema: iApiContactResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('source', params?.source);
    request.addHeaderParam('storeExternalId', params?.storeExternalId);
    request.addHeaderParam('createAsUnapproved', params?.createAsUnapproved);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
   * Promote a contact to a member with one or several required fields.
   * @param {string} contactId - Contact identifier (GUID).
   * @param {string} [source] - Source system identifier (instance configuration)
   * @returns {Promise<HttpResponse<IApiContact>>} OK
   */
  async contactsVPromoteToMember(
    contactId: string,
    body: any,
    params?: ContactsVPromoteToMemberParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<IApiContact>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/contacts/{contactId}/promoteToMember',
      config: this.config,
      responseSchema: iApiContactResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addHeaderParam('source', params?.source);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
   *
   * @param {string} [contactType] - Optional, if not set the default ContactType will be used
   * @returns {Promise<HttpResponse<string>>} BatchId
   */
  async contactBulkCreateContactsInBulk(
    body: any,
    params?: ContactBulkCreateContactsInBulkParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<string>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/contacts/bulk',
      config: this.config,
      responseSchema: z.string(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('contactType', params?.contactType);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
   *
   * @param {string} [contactType] - Optional, if not set the default ContactType will be used
   * @param {boolean} [avoidTriggeringExport] - Optional, default value is false
   * @returns {Promise<HttpResponse<string>>} BatchId
   */
  async contactBulkUpdateContactsInBulk(
    body: any,
    params?: ContactBulkUpdateContactsInBulkParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<string>> {
    const request = new Request({
      method: 'PATCH',
      body,
      path: '/api/v2/contacts/bulk',
      config: this.config,
      responseSchema: z.string(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('contactType', params?.contactType);
    request.addQueryParam('avoidTriggeringExport', params?.avoidTriggeringExport);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
 * Update the preference that indicates whether or not
a contact accepts to be contacted via sms. This will also approve an unapproved contact.
The primary way of updating a contact preference is through the update contacts endpoint.
 * @param {string} contactId - Contact identifier (GUID).
 * @returns {Promise<HttpResponse<IApiContact>>} OK
 */
  async contactPreferencesAcceptsSms(
    contactId: string,
    body: BoolRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<IApiContact>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/contacts/{contactId}/preferences/acceptsSms',
      config: this.config,
      responseSchema: iApiContactResponse,
      requestSchema: boolRequestRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
   * Adds reward points to a contact.
   * @param {string} contactId - Contact identifier (GUID).
   * @returns {Promise<HttpResponse<ApiAdjustRewardPointsResponse1>>} OK
   */
  async bonusPointTransactionsAdjustRewardPoints(
    contactId: string,
    body: ApiAdjustRewardPoints,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ApiAdjustRewardPointsResponse1>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/contacts/{contactId}/rewardpointtransaction',
      config: this.config,
      responseSchema: apiAdjustRewardPointsResponse1Response,
      requestSchema: apiAdjustRewardPointsRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
 * Update the preference that indicates whether or not 
a contact accepts to be contacted via email. This will also approve an unapproved contact.
The primary way of updating a contact preference is through the update contacts endpoint.
 * @param {string} contactId - Contact identifier (GUID).
 * @returns {Promise<HttpResponse<IApiContact>>} OK
 */
  async contactPreferencesAcceptsEmail(
    contactId: string,
    body: BoolRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<IApiContact>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/contacts/{contactId}/preferences/acceptsEmail',
      config: this.config,
      responseSchema: iApiContactResponse,
      requestSchema: boolRequestRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
 * Update the preference that indicates whether or not
a contact accepts to be contacted via regular mail. This will also approve an unapproved contact.
The primary way of updating a contact preference is through the update contacts endpoint.
 * @param {string} contactId - Contact identifier (GUID).
 * @returns {Promise<HttpResponse<IApiContact>>} OK
 */
  async contactPreferencesAcceptsPostal(
    contactId: string,
    body: BoolRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<IApiContact>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/contacts/{contactId}/preferences/acceptsPostal',
      config: this.config,
      responseSchema: iApiContactResponse,
      requestSchema: boolRequestRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
 * Assign a promotion (multichannel offer only) to a Contact using the internal Contact Id
and the id of the promotion
 * @param {string} contactId - Contact identifier
 * @param {string} promotionId - The id of the promotion
 * @returns {Promise<HttpResponse<any>>} OK
 */
  async assignPromotionAssign(
    contactId: string,
    promotionId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'POST',
      path: '/api/v2/contacts/{contactId}/promotions/{promotionId}/assign',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addPathParam('promotionId', promotionId);
    return this.client.call(request);
  }

  /**
 * Redeem a promotion (multichannel offer or mobile swipe) for a Contact using the internal Contact Id

Redemption channel can be POS, ECOM or OTHER.
 * @param {string} contactId - Contact identifier
 * @param {string} promotionId - The id of the promotion
 * @returns {Promise<HttpResponse<any>>} OK
 */
  async offerPromotionsRedeem(
    contactId: string,
    promotionId: string,
    body: RedeemBodyModel,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/contacts/{contactId}/promotions/{promotionId}/redeem',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: redeemBodyModelRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addPathParam('promotionId', promotionId);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
   * Optional messageId input if user wants to unsubscribe on specific message instead of last sent Sms
   * @param {string} contactId - Contact identifier (GUID).
   * @param {string} [messageId] - Message Id (string).
   * @returns {Promise<HttpResponse<any>>} OK
   */
  async contactMessageSmsUnsubscribeContact(
    contactId: string,
    params?: ContactMessageSmsUnsubscribeContactParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'POST',
      path: '/api/v2/contacts/{contactId}/unsubscribeSms',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addQueryParam('messageId', params?.messageId);
    return this.client.call(request);
  }

  /**
   * Optional messageId input if user wants to unsubscribe on specific message instead of last sent email
   * @param {string} contactId - Contact identifier (GUID).
   * @param {string} [messageId] - Message Id (string).
   * @returns {Promise<HttpResponse<any>>} OK
   */
  async contactMessageEmailUnsubscribeContact(
    contactId: string,
    params?: ContactMessageEmailUnsubscribeContactParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<undefined>> {
    const request = new Request({
      method: 'POST',
      path: '/api/v2/contacts/{contactId}/unsubscribeEmail',
      config: this.config,
      responseSchema: z.undefined(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addQueryParam('messageId', params?.messageId);
    return this.client.call(request);
  }

  /**
   * Updates the contactType for a contact if all expected contact data is available
   * @param {string} contactId - Contact identifier (GUID).
   * @param {string} contactTypeId - The ContactType id (string).
   * @returns {Promise<HttpResponse<any>>} OK
   */
  async contactsVUpdateContactType(
    contactId: string,
    params: ContactsVUpdateContactTypeParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<undefined>> {
    const request = new Request({
      method: 'POST',
      path: '/api/v2/contacts/{contactId}/updateContactType',
      config: this.config,
      responseSchema: z.undefined(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addQueryParam('contactTypeId', params?.contactTypeId);
    return this.client.call(request);
  }
}
