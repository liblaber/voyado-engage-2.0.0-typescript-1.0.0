import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { CartApiModel, cartApiModelRequest } from './models/cart-api-model';
import { OkResult, okResultResponse } from './models/ok-result';
import { ProductViewApiModel, productViewApiModelRequest } from './models/product-view-api-model';

export class TrackingService extends BaseService {
  /**
 * Register an update to a specific cart for a given contact. Should be the latest update of the cart.

Request model:
- CartReference: Unique identifier of the cart. Links the update to a specific cart. Ex: "006788ba-9f65-49c6-b3a0-2315d1854728"
- Time: Time of the cart update. ISO8601 with Time Zone Designators. Ex: "2021-09-22T11:00:00+02:00"
- ContactId: Contact id of the cart owner. GUID or short GUID. Ex: "ae16a9b4-f581-4568-8948-a96100b2afd4" 
- Language: Culture code of the cart. A corresponding product feed should be configured. Ex: "sv-SE"
- Url: Url to the cart. Ex: "https://www.store.se/cart?id=006788ba-9f65-49c6-b3a0-2315d1854728"
- Items: Collection of cart items. Ex: ```[{"Sku":"90183744","Quantity":1},{"Sku":"90156607","Quantity":1}]```
 * @returns {Promise<HttpResponse<OkResult>>} OK
 */
  async cartRegisterCart(body: CartApiModel, requestConfig?: RequestConfig): Promise<HttpResponse<OkResult>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/tracking/carts',
      config: this.config,
      responseSchema: okResultResponse,
      requestSchema: cartApiModelRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
 * Register a batch of cart updates. Cart updates are processed according to update time. If multiple cart updates are registered with the same identifier only the latest update (according to update time) is considered.        
        
Request model:
- CartReference: Unique identifier of the cart. Links the update to a specific cart. Ex: "006788ba-9f65-49c6-b3a0-2315d1854728"
- Time: Time of the cart update. ISO8601 with Time Zone Designators. Ex: "2021-09-22T11:00:00+02:00"
- ContactId: Contact id of the cart owner. GUID or short GUID. Ex: "ae16a9b4-f581-4568-8948-a96100b2afd4" 
- Language: Culture code of the cart. A corresponding product feed should be configured. Ex: "sv-SE"
- Url: Url to the cart. Ex: "https://www.store.se/cart?id=006788ba-9f65-49c6-b3a0-2315d1854728"
- Items: Collection of cart items. Ex: ```[{"Sku":"90183744","Quantity":1},{"Sku":"90156607","Quantity":1}]```
 * @returns {Promise<HttpResponse<OkResult>>} OK
 */
  async cartRegisterCarts(body: CartApiModel[], requestConfig?: RequestConfig): Promise<HttpResponse<OkResult>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/tracking/carts/batch',
      config: this.config,
      responseSchema: okResultResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
 * Register a view of a specific product for a given contact.

Request model:
- ItemId: Unique SKU/Article Id/Item Id of the viewed product. Will be matched against SKU on the imported articles in Voyado. Ex: "123XYZ"
- Category: Category of the product on the website. Will be used for filtering. Ex: "novels &gt; cormac mccarthy &gt; the road"
- Time: Time of the product view. ISO8601 with Time Zone Designators. Ex: "2021-09-22T11:00:00+02:00".
- ContactId: Contact id of the viewer. GUID or short GUID. Ex: "FF9FD9AF-6778-4714-B0FE-F6E6612840C8"
- SessionId: Unique identifier of the session. Ex: "3b7e493b-5dfe-4b98-b6cf-049f2ea4309d"
- NewSession: Boolean value that indicates that new session.
- Language: Culture code of the cart. A corresponding product feed should be configured. Ex: "sv-SE"
- Url: Url of the productview. Ex: "https://www.voyado.com?sku=eu901-011-v10"
- ExternalReferrer: The external site that the user came from (clicked a link) Ex: "https://www.google.com"
 * @returns {Promise<HttpResponse<any>>} OK
 */
  async productViewVRegisterProductView(
    body: ProductViewApiModel,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/tracking/productview',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: productViewApiModelRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
 * Register a collection of views to specific products for given contacts.

Request model:
- ItemId: Unique SKU/Article Id/Item Id of the viewed product. Will be matched against SKU on the imported articles in Voyado. Ex: "123XYZ"
- Category: Category of the product on the website. Will be used for filtering. Ex: "novels &gt; cormac mccarthy &gt; the road"
- Time: Time of the product view. ISO8601 with Time Zone Designators. Ex: "2021-09-22T11:00:00+02:00"
- ContactId: Contact id of the viewer. GUID or short GUID. Ex: "FF9FD9AF-6778-4714-B0FE-F6E6612840C8"
- SessionId: Unique identifier of the session. Ex: "3b7e493b-5dfe-4b98-b6cf-049f2ea4309d"
- NewSession: Boolean value that indicates that new session.
- Language: Culture code of the cart. A corresponding product feed should be configured. Ex: "sv-SE"
- Url: Url of the productview. Ex: "https://www.voyado.com?sku=eu901-011-v10"
- ExternalReferrer: The external site that the user came from (clicked a link) Ex: "https://www.google.com"
 * @returns {Promise<HttpResponse<any>>} OK
 */
  async productViewVRegisterProductViews(
    body: ProductViewApiModel[],
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/tracking/productviews',
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
}
