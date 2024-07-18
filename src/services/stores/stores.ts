import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { ApiStore, apiStoreRequest, apiStoreResponse } from './models/api-store';
import { StoresVGetStoreParams, StoresVGetStoresParams } from './request-params';

export class StoresService extends BaseService {
  /**
   *
   * @param {boolean} [includeInactive] - Value indicating if the inactive stores should be included or not. (Default value = false)
   * @returns {Promise<HttpResponse<ApiStore[]>>} OK
   */
  async storesVGetStores(
    params?: StoresVGetStoresParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ApiStore[]>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/stores',
      config: this.config,
      responseSchema: z.array(apiStoreResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('includeInactive', params?.includeInactive);
    return this.client.call(request);
  }

  /**
   *
   * @returns {Promise<HttpResponse<ApiStore>>} OK
   */
  async storesVCreateStore(body: ApiStore, requestConfig?: RequestConfig): Promise<HttpResponse<ApiStore>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/stores',
      config: this.config,
      responseSchema: apiStoreResponse,
      requestSchema: apiStoreRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
   *
   * @param {string} externalId - The external id of the store to get.
   * @param {boolean} [includeInactive] - Value indicating if the store can be inactive or not. (Default value = false)
   * @returns {Promise<HttpResponse<ApiStore>>} OK
   */
  async storesVGetStore(
    externalId: string,
    params?: StoresVGetStoreParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ApiStore>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/stores/{externalId}',
      config: this.config,
      responseSchema: apiStoreResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('externalId', externalId);
    request.addQueryParam('includeInactive', params?.includeInactive);
    return this.client.call(request);
  }

  /**
   * Updates a store. externalId is the store identifier.
   * @param {string} externalId - The external id of the store to update.
   * @returns {Promise<HttpResponse<ApiStore>>} OK
   */
  async storesVUpdateStore(
    externalId: string,
    body: ApiStore,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ApiStore>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/stores/{externalId}',
      config: this.config,
      responseSchema: apiStoreResponse,
      requestSchema: apiStoreRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('externalId', externalId);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }
}
