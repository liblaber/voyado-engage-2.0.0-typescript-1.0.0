import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { PointAccountModel, pointAccountModelResponse } from './models/point-account-model';
import { PointDefinitionModel, pointDefinitionModelResponse } from './models/point-definition-model';
import { PointTransactionModel, pointTransactionModelResponse } from './models/point-transaction-model';
import {
  PointAccountAddPointTransactionsParams,
  PointAccountPointAccountGet2Params,
  PointAccountPointDefinitionsParams,
  PointAccountPointTransactions2Params,
} from './request-params';
import { PointAccountModelsResult, pointAccountModelsResultResponse } from './models/point-account-models-result';
import {
  PointTransactionModelsResult,
  pointTransactionModelsResultResponse,
} from './models/point-transaction-models-result';
import { PointTransactionToAccount, pointTransactionToAccountRequest } from './models/point-transaction-to-account';
import {
  PointTransactionToAccountResultModel,
  pointTransactionToAccountResultModelResponse,
} from './models/point-transaction-to-account-result-model';

export class PointAccountsService extends BaseService {
  /**
   * Get the point account by point account id
   * @param {number} id - Account id
   * @returns {Promise<HttpResponse<PointAccountModel>>} OK
   */
  async pointAccountPointAccountGet(
    id: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PointAccountModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/point-accounts/{id}',
      config: this.config,
      responseSchema: pointAccountModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('id', id);
    return this.client.call(request);
  }

  /**
 * ## Gets a point account matched with the pointDefinitionId
            
Gets the name, id and description for each pointDefinition
 * @param {number} id - Definition Id
 * @returns {Promise<HttpResponse<PointDefinitionModel>>} OK
 */
  async pointAccountPointDefinition(
    id: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PointDefinitionModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/point-accounts/definitions/{id}',
      config: this.config,
      responseSchema: pointDefinitionModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('id', id);
    return this.client.call(request);
  }

  /**
   *
   * @param {number} id - Transaction id
   * @returns {Promise<HttpResponse<PointTransactionModel>>} OK
   */
  async pointAccountPointTransactions(
    id: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PointTransactionModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/point-accounts/transactions/{id}',
      config: this.config,
      responseSchema: pointTransactionModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('id', id);
    return this.client.call(request);
  }

  /**
   * ## Gets point definitions
   * @param {number} [offset] - Defaults to 0
   * @param {number} [count] - Defaults to 100
   * @returns {Promise<HttpResponse<PointDefinitionModel[]>>} OK
   */
  async pointAccountPointDefinitions(
    params?: PointAccountPointDefinitionsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PointDefinitionModel[]>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/point-accounts/definitions',
      config: this.config,
      responseSchema: z.array(pointDefinitionModelResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('offset', params?.offset);
    request.addQueryParam('count', params?.count);
    return this.client.call(request);
  }

  /**
   * Gets a list of accounts by contact id
   * @param {string} contactId - Contact id
   * @param {number} [offset] - Defaults to 0
   * @param {number} [count] - Defaults to 100
   * @returns {Promise<HttpResponse<PointAccountModelsResult>>} OK
   */
  async pointAccountPointAccountGet2(
    params: PointAccountPointAccountGet2Params,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PointAccountModelsResult>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/point-accounts',
      config: this.config,
      responseSchema: pointAccountModelsResultResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('contactId', params?.contactId);
    request.addQueryParam('offset', params?.offset);
    request.addQueryParam('count', params?.count);
    return this.client.call(request);
  }

  /**
 * There are two ways to fetch the list of transactions:
- Using just the accountId returns the transactions for that particular points account. If this is used, the parameters contactId and definitionId are not required. If they are given, they will just be ignored.
- The other way is to specify both contactId and definitionId. Both must be given.

The optional parameters offset and count can be used in both cases to paginate the results.
The optional parameter filter can also be used to fetch active points, pending points or both.
All parameters are added to the query string.
 * @param {string} [contactId] - Contact id - Required together with definitionId if not using account id
 * @param {number} [definitionId] - Definition id - Required together with contactId if not using account id
 * @param {number} [accountId] - Account id - Required if contactId and definitionId is not provided
 * @param {number} [offset] - Defaults to 0
 * @param {number} [count] - Defaults to 100
 * @param {PointAccountPointTransactions2Filter} [filter] - All, Active or Pending. If not specified it will default to All.
 * @returns {Promise<HttpResponse<PointTransactionModelsResult>>} OK
 */
  async pointAccountPointTransactions2(
    params?: PointAccountPointTransactions2Params,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PointTransactionModelsResult>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/point-accounts/transactions',
      config: this.config,
      responseSchema: pointTransactionModelsResultResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('contactId', params?.contactId);
    request.addQueryParam('definitionId', params?.definitionId);
    request.addQueryParam('accountId', params?.accountId);
    request.addQueryParam('offset', params?.offset);
    request.addQueryParam('count', params?.count);
    request.addQueryParam('filter', params?.filter);
    return this.client.call(request);
  }

  /**
 * ## Point transactions being sent to a contacts specified point account, the endpoint will able to take max 1000 transaction rows.
            
### The following fields should be provided and have certain rules:
- contactId: Must be a Guid
- amount: The amount of points, negative amounts are accepted.
- definitionId: specifies to which point account each transaction should be sent to
- timeStamp: If not provided then the default value is taken from the requestors system timezone.
- source: Must be provided or else that specified transaction will not be accepted.
- description: Must be provided or else that transaction will not be accepted.
- validFrom: If not provided then the default value is taken from the requestors system timezone.
- validTo: Specifies how long the points are valid
            
### Important info:
If some rows are not correct it will still result in an accepted response code and be skipped. Please
check the response for NotAccepted items
            
### Idempotency-Key:
The idempotency key is a unique identifier included in the header of an HTTP request to ensure the idempotence of certain operations. An idempotent operation is one that produces the same result regardless of how many times it is executed with the same input.
#### Purpose
The primary purpose of the idempotency key is to enable safe retries of requests. In situations where a client needs to resend a request due to network issues or other transient failures, the idempotency key helps prevent unintended side effects by ensuring that repeated requests with the same key result in the same outcome.
 * @param {string} [idempotencyKey] - Optional, lasts for 24 hours
 * @returns {Promise<HttpResponse<PointTransactionToAccountResultModel>>} The request is accepted
 */
  async pointAccountAddPointTransactions(
    body: PointTransactionToAccount[],
    params?: PointAccountAddPointTransactionsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PointTransactionToAccountResultModel>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/point-accounts/transactions',
      config: this.config,
      responseSchema: pointTransactionToAccountResultModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Idempotency-Key', params?.idempotencyKey);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }
}
