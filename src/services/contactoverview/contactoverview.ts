// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
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
 * @param {string} [any_] - 
 * @returns {Promise<HttpResponse<any>>} OK
 */
  async contactOverviewGetContactOverviewAsync(
    params?: ContactOverviewGetContactOverviewAsyncParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const path = '/api/v2/contactoverview';
    const options: any = {
      responseSchema: z.any(),
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.contactType) {
      options.queryParams['contactType'] = params?.contactType;
    }
    if (params?.contactId) {
      options.queryParams['contactId'] = params?.contactId;
    }
    if (params?.email) {
      options.queryParams['email'] = params?.email;
    }
    if (params?.socialSecurityNumber) {
      options.queryParams['socialSecurityNumber'] = params?.socialSecurityNumber;
    }
    if (params?.mobilePhone) {
      options.queryParams['mobilePhone'] = params?.mobilePhone;
    }
    if (params?.customKey) {
      options.queryParams['customKey'] = params?.customKey;
    }
    if (params?.any_) {
      options.queryParams['any'] = params?.any_;
    }
    return this.client.get(path, options);
  }
}