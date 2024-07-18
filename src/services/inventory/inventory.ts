import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { StockLevelRequest, stockLevelRequestRequest } from './models/stock-level-request';
import { SubscriptionRequest, subscriptionRequestRequest } from './models/subscription-request';

export class InventoryService extends BaseService {
  /**
 * Update stock level for a specific SKU.

Request model:
- Sku*: Unique SKU of the product. E.g: "123XYZ"
- Quantity*: The latest stock quantity of the product. E.g: 10
- Locale: Culture code. A corresponding product feed should be configured. E.g: "sv-se"        
- ExternalId: External identifier. E.g: "SE-123XYZ"

\* required
 * @returns {Promise<HttpResponse<any>>} OK
 */
  async inventoryUpdateStockLevel(body: StockLevelRequest, requestConfig?: RequestConfig): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'PUT',
      body,
      path: '/api/v2/inventory/stock-levels',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: stockLevelRequestRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
 * Batch update of stock levels for multiple SKU's.

Request model:
- Sku*: Unique SKU of the product. E.g: "123XYZ"
- Quantity*: The latest stock quantity of the product. E.g: 10
- Locale: Culture code. A corresponding product feed should be configured. E.g: "sv-se"        
- ExternalId: External identifier. E.g: "SE-123XYZ"

\* required
 * @returns {Promise<HttpResponse<any>>} OK
 */
  async inventoryUpdateStockLevels(
    body: StockLevelRequest[],
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'PUT',
      body,
      path: '/api/v2/inventory/stock-levels/batch',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
 * Create a back in stock subscription for a specific SKU.

Request model:
- ContactId*: Contact id of the subscriber. E.g: "FF9FD9AF-6778-4714-B0FE-F6E6612840C8"
- Sku*: Unique SKU of the product. E.g: "123XYZ"
- Locale*: Culture code. A corresponding product feed should be configured. E.g: "sv-se"
- ExternalId: External identifier. E.g: "SE-123XYZ"

\* required
 * @returns {Promise<HttpResponse<any>>} OK
 */
  async backInStockSubscriptionSubscribe(
    body: SubscriptionRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/inventory/backinstock/subscriptions',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: subscriptionRequestRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
   * Delete a specific back in stock subscription.
   * @param {string} subscriptionId -
   * @returns {Promise<HttpResponse<any>>} OK
   */
  async backInStockSubscriptionUnsubscribe(
    subscriptionId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'DELETE',
      path: '/api/v2/inventory/backinstock/subscriptions/{subscriptionId}',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('subscriptionId', subscriptionId);
    return this.client.call(request);
  }
}
