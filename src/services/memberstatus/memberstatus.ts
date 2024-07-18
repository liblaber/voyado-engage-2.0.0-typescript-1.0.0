import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { MemberStatusModel, memberStatusModelResponse } from './models/member-status-model';
import { MemberStatusVGetParams } from './request-params';

export class MemberstatusService extends BaseService {
  /**
 * Gets the first found member that matches the query.

Operation to get member overview. Is usually called from 
POS after a member gives some identification information
this method returns the status together with contactId (GUID)
and memberNumber (if available). The contactId may be used
to get detailed contact information. 

Common identification fields that may be used in the query: 
socialSecurityNumber, email, mobilePhone, memberNumber and externalId

The language of the returned answer is controlled by the language setting of the user connected to the API-key.
 * @param {string} query - ```{fieldId}:{value}```, e.g. email:test@test.com
 * @returns {Promise<HttpResponse<MemberStatusModel>>} OK
 */
  async memberStatusVGet(
    params: MemberStatusVGetParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<MemberStatusModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/memberstatus',
      config: this.config,
      responseSchema: memberStatusModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('query', params?.query);
    return this.client.call(request);
  }
}
