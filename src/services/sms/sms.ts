// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { SendSmsRequest, sendSmsRequestRequest } from './models';
import { SendSmsResponse, sendSmsResponseResponse } from '../common';

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
    const path = '/api/v2/sms/sendToPhoneNumbers';
    const options: any = {
      responseSchema: sendSmsResponseResponse,
      requestSchema: sendSmsRequestRequest,
      body: body as any,
      headers: {
        'Content-Type': 'application/json',
      },
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.post(path, options);
  }
}
