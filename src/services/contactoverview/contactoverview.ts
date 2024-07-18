import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { ContactOverviewGetContactOverviewAsyncParams } from './request-params';

export class ContactoverviewService extends BaseService {
  /**
 * Get all information about a single contact by specifying either:
- contactId
- email and contactType
- socialSecurityNumber and contactType
- mobilePhone and contactType
- customKey and contactType (the customKey must be configured by your supplier)
- any and contactType - the any field can contain email, socialSecurityNumber, mobilePhone or the custom key (and are checked in that order)
            
The dynamic fields of the response depend on your current Voyado configuration.
 * @param {string} [contactType] - 
 * @param {string} [contactId] - 
 * @param {string} [email] - 
 * @param {string} [socialSecurityNumber] - 
 * @param {string} [mobilePhone] - 
 * @param {string} [customKey] - 
 * @param {string} [any] - 
 * @returns {Promise<HttpResponse<any>>} OK
 */
  async contactOverviewGetContactOverviewAsync(
    params?: ContactOverviewGetContactOverviewAsyncParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contactoverview',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('contactType', params?.contactType);
    request.addQueryParam('contactId', params?.contactId);
    request.addQueryParam('email', params?.email);
    request.addQueryParam('socialSecurityNumber', params?.socialSecurityNumber);
    request.addQueryParam('mobilePhone', params?.mobilePhone);
    request.addQueryParam('customKey', params?.customKey);
    request.addQueryParam('any', params?.any);
    return this.client.call(request);
  }
}
