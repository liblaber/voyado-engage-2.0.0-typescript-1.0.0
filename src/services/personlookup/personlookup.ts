import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { ContactSearchResult, contactSearchResultResponse } from './models/contact-search-result';
import { PersonLookupGetPersonLookupParams } from './request-params';

export class PersonlookupService extends BaseService {
  /**
   *
   * @param {string} [socialSecurityNumber] - String that contains social security number
   * @param {string} [phoneNumber] - String that contains mobile phone number
   * @param {string} [countryCode] - Country where the contact is registered
   * @returns {Promise<HttpResponse<ContactSearchResult>>} OK
   */
  async personLookupGetPersonLookup(
    params?: PersonLookupGetPersonLookupParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ContactSearchResult>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/personlookup/getpersonlookup',
      config: this.config,
      responseSchema: contactSearchResultResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('socialSecurityNumber', params?.socialSecurityNumber);
    request.addQueryParam('phoneNumber', params?.phoneNumber);
    request.addQueryParam('countryCode', params?.countryCode);
    return this.client.call(request);
  }
}
