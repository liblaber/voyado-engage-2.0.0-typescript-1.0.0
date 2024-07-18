import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';

export class AutomationService extends BaseService {
  /**
   *
   * @param {string} triggerId -
   * @param {string} contactId -
   * @returns {Promise<HttpResponse<any>>} OK
   */
  async customTriggersTriggerByContactId(
    triggerId: string,
    contactId: string,
    body: any,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/automation/customTriggers/{triggerId}/triggerByContactId/{contactId}',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('triggerId', triggerId);
    request.addPathParam('contactId', contactId);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
   *
   * @param {string} triggerId -
   * @param {string} ssn -
   * @returns {Promise<HttpResponse<any>>} OK
   */
  async customTriggersTriggerBySocialSecurityNumber(
    triggerId: string,
    ssn: string,
    body: any,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/automation/customTriggers/{triggerId}/triggerBySocialSecurityNumber/{ssn}',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('triggerId', triggerId);
    request.addPathParam('ssn', ssn);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
   *
   * @param {string} triggerId -
   * @param {string} externalId -
   * @returns {Promise<HttpResponse<any>>} OK
   */
  async customTriggersTriggerByExternalContactId(
    triggerId: string,
    externalId: string,
    body: any,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/automation/customTriggers/{triggerId}/triggerByExternalContactId/{externalId}',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('triggerId', triggerId);
    request.addPathParam('externalId', externalId);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
   *
   * @param {string} triggerId -
   * @param {string} contactType -
   * @param {string} keyValue -
   * @returns {Promise<HttpResponse<any>>} OK
   */
  async customTriggersTriggerByContactTypeAndKey(
    triggerId: string,
    contactType: string,
    keyValue: string,
    body: any,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/automation/customTriggers/{triggerId}/triggerByContactTypeAndKey/{contactType}/{keyValue}',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('triggerId', triggerId);
    request.addPathParam('contactType', contactType);
    request.addPathParam('keyValue', keyValue);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }
}
