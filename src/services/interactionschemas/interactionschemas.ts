// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import {
  InteractionSchemaWithoutJsonModel,
  interactionSchemaWithoutJsonModelResponse,
} from './models/interaction-schema-without-json-model';
import { InteractionSchemaResponse, interactionSchemaResponseResponse } from './models/interaction-schema-response';
import { InteractionSchemaModel, interactionSchemaModelResponse } from './models/interaction-schema-model';

export class InteractionschemasService extends BaseService {
  /**
   * Retrieve all InteractionSchemas.
   * @returns {Promise<HttpResponse<InteractionSchemaWithoutJsonModel[]>>} InteractionSchemas
   */
  async interactionSchemaGetInteractionSchemas(
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<InteractionSchemaWithoutJsonModel[]>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/interactionschemas',
      config: this.config,
      responseSchema: z.array(interactionSchemaWithoutJsonModelResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    return this.client.call(request);
  }

  /**
   * Create a new InteractionSchema.
   * @returns {Promise<HttpResponse<InteractionSchemaResponse>>} InteractionSchemaResponse
   */
  async interactionSchemaCreateInteractionSchema(
    body: any,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<InteractionSchemaResponse>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/interactionschemas',
      config: this.config,
      responseSchema: interactionSchemaResponseResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
   * Retrieve a specific InteractionSchema by providing the schemaId.
   * @param {string} interactionSchemaId -
   * @returns {Promise<HttpResponse<InteractionSchemaModel>>} InteractionSchema
   */
  async interactionSchemaGetInteractionSchema(
    interactionSchemaId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<InteractionSchemaModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/interactionschemas/{interactionSchemaId}',
      config: this.config,
      responseSchema: interactionSchemaModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('interactionSchemaId', interactionSchemaId);
    return this.client.call(request);
  }

  /**
   * Delete InteractionSchema by providing the schemaId.
   * @param {string} interactionSchemaId -
   * @returns {Promise<HttpResponse<any>>} InteractionSchema Removed
   */
  async interactionSchemaDeleteInteractionSchema(
    interactionSchemaId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<undefined>> {
    const request = new Request({
      method: 'DELETE',
      path: '/api/v2/interactionschemas/{interactionSchemaId}',
      config: this.config,
      responseSchema: z.undefined(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('interactionSchemaId', interactionSchemaId);
    return this.client.call(request);
  }
}
