import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { SendSmsRequest, sendSmsRequestRequest } from './models/send-sms-request';
import { SendSmsResponse, sendSmsResponseResponse } from './models/send-sms-response';

export class SmsService extends BaseService {
  /**
 * Send an SMS to one or multiple phone numbers. 

Phone numbers must be prefixed with a + and country code
(e.g. +4670xxxxxxx for a Swedish mobile phone number).
 * @returns {Promise<HttpResponse<SendSmsResponse>>} OK
 */
  async smsMessagesSendSmsToPhoneNumbers(
    body: SendSmsRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<SendSmsResponse>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/sms/sendToPhoneNumbers',
      config: this.config,
      responseSchema: sendSmsResponseResponse,
      requestSchema: sendSmsRequestRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }
}
