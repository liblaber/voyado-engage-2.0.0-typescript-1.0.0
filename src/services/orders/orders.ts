import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { Order, orderRequest } from './models/order';
import { StatusCodeResult, statusCodeResultResponse } from '../common/status-code-result';

export class OrdersService extends BaseService {
  /**
 * The /orders endpoint is used to trigger automation flows in Engage and send out information about the order to your end customers.
It could be used, for example, for an order confirmation, delivery confirmation or a return confirmation from an e-commerce
system or store. The endpoint is called every time a change happens that you want to act on in Engage. All the data needed must
be sent with every call, since this endpoint saves no data concerning orders. If you need to save data, use the /receipts endpoint instead.

Note that there is no check against previous requests of the same order,
thus two identical requests to this endpoint will trigger any matching automation twice.
 
To accept an order:
- The different orderStatus and paymentStatus values must be configured in Voyado.
- totalGrossPrice, totalTax, item quantities etc. must be correct and add up.

If the order is not accepted, a response with HTTP Status Code 400 or 422 and an error code will be returned.
 * @returns {Promise<HttpResponse<StatusCodeResult>>} Accepted
 */
  async ordersRegisterOrder(body: Order, requestConfig?: RequestConfig): Promise<HttpResponse<StatusCodeResult>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/orders',
      config: this.config,
      responseSchema: statusCodeResultResponse,
      requestSchema: orderRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }
}
