import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { InteractionModel, interactionModelResponse } from './models/interaction-model';
import { InteractionPage, interactionPageResponse } from './models/interaction-page';
import { InteractionGetInteractionsParams } from './request-params';
import { InteractionCreateResponse, interactionCreateResponseResponse } from './models/interaction-create-response';

export class InteractionsService extends BaseService {
  /**
   * Retrieve a specific Interaction by providing the interactionId.
   * @param {string} interactionId -
   * @returns {Promise<HttpResponse<InteractionModel>>} Interaction
   */
  async interactionGetInteraction(
    interactionId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<InteractionModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/interactions/{interactionId}',
      config: this.config,
      responseSchema: interactionModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('interactionId', interactionId);
    return this.client.call(request);
  }

  /**
   * Delete a specific Interaction by providing the interactionId.
   * @param {string} interactionId -
   * @returns {Promise<HttpResponse<any>>} Interaction Removed
   */
  async interactionDeleteInteraction(
    interactionId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<undefined>> {
    const request = new Request({
      method: 'DELETE',
      path: '/api/v2/interactions/{interactionId}',
      config: this.config,
      responseSchema: z.undefined(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('interactionId', interactionId);
    return this.client.call(request);
  }

  /**
 * Retrieve multiple Interactions of a specified type connected to a specific contactId. Both schemaId and contactId are required. 
The continuation parameter can be used to access the next page when there are more than 50 records available. This token can be found in the response.
 * @param {string} contactId - 
 * @param {string} schemaId - 
 * @param {string} [continuation] - 
 * @returns {Promise<HttpResponse<InteractionPage>>} Interactions
 */
  async interactionGetInteractions(
    params: InteractionGetInteractionsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<InteractionPage>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/interactions',
      config: this.config,
      responseSchema: interactionPageResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('contactId', params?.contactId);
    request.addQueryParam('schemaId', params?.schemaId);
    request.addQueryParam('continuation', params?.continuation);
    return this.client.call(request);
  }

  /**
   * Create a new Interaction connected to a specific contactId.
   * @returns {Promise<HttpResponse<InteractionCreateResponse>>} InteractionResponse
   */
  async interactionCreateInteraction(
    body: any,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<InteractionCreateResponse>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/interactions',
      config: this.config,
      responseSchema: interactionCreateResponseResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }
}
