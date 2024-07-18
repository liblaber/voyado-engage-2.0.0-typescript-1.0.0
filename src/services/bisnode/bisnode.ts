import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { EnrichmentVariableGroup, enrichmentVariableGroupResponse } from './models/enrichment-variable-group';

export class BisnodeService extends BaseService {
  /**
   *
   * @param {string} contactId - Contact identifier
   * @returns {Promise<HttpResponse<EnrichmentVariableGroup[]>>} OK
   */
  async bisnodeVGetEnrichments(
    contactId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<EnrichmentVariableGroup[]>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/bisnode/{contactId}/enrichments',
      config: this.config,
      responseSchema: z.array(enrichmentVariableGroupResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    return this.client.call(request);
  }
}
