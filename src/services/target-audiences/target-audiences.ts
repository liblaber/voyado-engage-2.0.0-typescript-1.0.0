import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { IdName, idNameResponse } from './models/id-name';

export class TargetAudiencesService extends BaseService {
  /**
   *
   * @returns {Promise<HttpResponse<IdName[]>>} List of all target audiences
   */
  async targetAudienceGetTargetAudiences(requestConfig?: RequestConfig): Promise<HttpResponse<IdName[]>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/target-audiences',
      config: this.config,
      responseSchema: z.array(idNameResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    return this.client.call(request);
  }
}
