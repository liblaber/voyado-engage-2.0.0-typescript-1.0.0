# TrackingService

A list of all methods in the `TrackingService` service. Click on the method name to view detailed information about that method.

| Methods                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :---------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Cart_RegisterCart](#cart_registercart)                                 | Register an update to a specific cart for a given contact. Should be the latest update of the cart. Request model: - CartReference: Unique identifier of the cart. Links the update to a specific cart. Ex: "006788ba-9f65-49c6-b3a0-2315d1854728" - Time: Time of the cart update. ISO8601 with Time Zone Designators. Ex: "2021-09-22T11:00:00+02:00" - ContactId: Contact id of the cart owner. GUID or short GUID. Ex: "ae16a9b4-f581-4568-8948-a96100b2afd4" - Language: Culture code of the cart. A corresponding product feed should be configured. Ex: "sv-SE" - Url: Url to the cart. Ex: "https://www.store.se/cart?id=006788ba-9f65-49c6-b3a0-2315d1854728" - Items: Collection of cart items. Ex: `[{"Sku":"90183744","Quantity":1},{"Sku":"90156607","Quantity":1}]`                                                                                                                                                                                                                                                    |
| [Cart_RegisterCarts](#cart_registercarts)                               | Register a batch of cart updates. Cart updates are processed according to update time. If multiple cart updates are registered with the same identifier only the latest update (according to update time) is considered. Request model: - CartReference: Unique identifier of the cart. Links the update to a specific cart. Ex: "006788ba-9f65-49c6-b3a0-2315d1854728" - Time: Time of the cart update. ISO8601 with Time Zone Designators. Ex: "2021-09-22T11:00:00+02:00" - ContactId: Contact id of the cart owner. GUID or short GUID. Ex: "ae16a9b4-f581-4568-8948-a96100b2afd4" - Language: Culture code of the cart. A corresponding product feed should be configured. Ex: "sv-SE" - Url: Url to the cart. Ex: "https://www.store.se/cart?id=006788ba-9f65-49c6-b3a0-2315d1854728" - Items: Collection of cart items. Ex: `[{"Sku":"90183744","Quantity":1},{"Sku":"90156607","Quantity":1}]`                                                                                                                               |
| [ProductViewV_RegisterProductView](#productviewv_registerproductview)   | Register a view of a specific product for a given contact. Request model: - ItemId: Unique SKU/Article Id/Item Id of the viewed product. Will be matched against SKU on the imported articles in Voyado. Ex: "123XYZ" - Category: Category of the product on the website. Will be used for filtering. Ex: "novels &gt; cormac mccarthy &gt; the road" - Time: Time of the product view. ISO8601 with Time Zone Designators. Ex: "2021-09-22T11:00:00+02:00". - ContactId: Contact id of the viewer. GUID or short GUID. Ex: "FF9FD9AF-6778-4714-B0FE-F6E6612840C8" - SessionId: Unique identifier of the session. Ex: "3b7e493b-5dfe-4b98-b6cf-049f2ea4309d" - NewSession: Boolean value that indicates that new session. - Language: Culture code of the cart. A corresponding product feed should be configured. Ex: "sv-SE" - Url: Url of the productview. Ex: "https://www.voyado.com?sku=eu901-011-v10" - ExternalReferrer: The external site that the user came from (clicked a link) Ex: "https://www.google.com"             |
| [ProductViewV_RegisterProductViews](#productviewv_registerproductviews) | Register a collection of views to specific products for given contacts. Request model: - ItemId: Unique SKU/Article Id/Item Id of the viewed product. Will be matched against SKU on the imported articles in Voyado. Ex: "123XYZ" - Category: Category of the product on the website. Will be used for filtering. Ex: "novels &gt; cormac mccarthy &gt; the road" - Time: Time of the product view. ISO8601 with Time Zone Designators. Ex: "2021-09-22T11:00:00+02:00" - ContactId: Contact id of the viewer. GUID or short GUID. Ex: "FF9FD9AF-6778-4714-B0FE-F6E6612840C8" - SessionId: Unique identifier of the session. Ex: "3b7e493b-5dfe-4b98-b6cf-049f2ea4309d" - NewSession: Boolean value that indicates that new session. - Language: Culture code of the cart. A corresponding product feed should be configured. Ex: "sv-SE" - Url: Url of the productview. Ex: "https://www.voyado.com?sku=eu901-011-v10" - ExternalReferrer: The external site that the user came from (clicked a link) Ex: "https://www.google.com" |

## Cart_RegisterCart

Register an update to a specific cart for a given contact. Should be the latest update of the cart. Request model: - CartReference: Unique identifier of the cart. Links the update to a specific cart. Ex: "006788ba-9f65-49c6-b3a0-2315d1854728" - Time: Time of the cart update. ISO8601 with Time Zone Designators. Ex: "2021-09-22T11:00:00+02:00" - ContactId: Contact id of the cart owner. GUID or short GUID. Ex: "ae16a9b4-f581-4568-8948-a96100b2afd4" - Language: Culture code of the cart. A corresponding product feed should be configured. Ex: "sv-SE" - Url: Url to the cart. Ex: "https://www.store.se/cart?id=006788ba-9f65-49c6-b3a0-2315d1854728" - Items: Collection of cart items. Ex: `[{"Sku":"90183744","Quantity":1},{"Sku":"90156607","Quantity":1}]`

- HTTP Method: `POST`
- Endpoint: `/api/v2/tracking/carts`

**Parameters**

| Name | Type                                      | Required | Description       |
| :--- | :---------------------------------------- | :------- | :---------------- |
| body | [CartApiModel](../models/CartApiModel.md) | ✅       | The request body. |

**Return Type**

`OkResult`

**Example Usage Code Snippet**

```typescript
import { CartApiModel, CartItemApiModel, VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const cartItemApiModel: CartItemApiModel = {
    sku: 'sku',
    quantity: 9,
  };

  const input: CartApiModel = {
    cartReference: 'cartReference',
    time: 'time',
    contactId: 'contactId',
    language: 'language',
    url: 'url',
    items: [cartItemApiModel],
  };

  const { data } = await voyadoEngage.tracking.cartRegisterCart(input);

  console.log(data);
})();
```

## Cart_RegisterCarts

Register a batch of cart updates. Cart updates are processed according to update time. If multiple cart updates are registered with the same identifier only the latest update (according to update time) is considered. Request model: - CartReference: Unique identifier of the cart. Links the update to a specific cart. Ex: "006788ba-9f65-49c6-b3a0-2315d1854728" - Time: Time of the cart update. ISO8601 with Time Zone Designators. Ex: "2021-09-22T11:00:00+02:00" - ContactId: Contact id of the cart owner. GUID or short GUID. Ex: "ae16a9b4-f581-4568-8948-a96100b2afd4" - Language: Culture code of the cart. A corresponding product feed should be configured. Ex: "sv-SE" - Url: Url to the cart. Ex: "https://www.store.se/cart?id=006788ba-9f65-49c6-b3a0-2315d1854728" - Items: Collection of cart items. Ex: `[{"Sku":"90183744","Quantity":1},{"Sku":"90156607","Quantity":1}]`

- HTTP Method: `POST`
- Endpoint: `/api/v2/tracking/carts/batch`

**Parameters**

| Name | Type                                        | Required | Description       |
| :--- | :------------------------------------------ | :------- | :---------------- |
| body | [CartApiModel[]](../models/CartApiModel.md) | ✅       | The request body. |

**Return Type**

`OkResult`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.tracking.cartRegisterCarts(input);

  console.log(data);
})();
```

## ProductViewV_RegisterProductView

Register a view of a specific product for a given contact. Request model: - ItemId: Unique SKU/Article Id/Item Id of the viewed product. Will be matched against SKU on the imported articles in Voyado. Ex: "123XYZ" - Category: Category of the product on the website. Will be used for filtering. Ex: "novels &gt; cormac mccarthy &gt; the road" - Time: Time of the product view. ISO8601 with Time Zone Designators. Ex: "2021-09-22T11:00:00+02:00". - ContactId: Contact id of the viewer. GUID or short GUID. Ex: "FF9FD9AF-6778-4714-B0FE-F6E6612840C8" - SessionId: Unique identifier of the session. Ex: "3b7e493b-5dfe-4b98-b6cf-049f2ea4309d" - NewSession: Boolean value that indicates that new session. - Language: Culture code of the cart. A corresponding product feed should be configured. Ex: "sv-SE" - Url: Url of the productview. Ex: "https://www.voyado.com?sku=eu901-011-v10" - ExternalReferrer: The external site that the user came from (clicked a link) Ex: "https://www.google.com"

- HTTP Method: `POST`
- Endpoint: `/api/v2/tracking/productview`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [ProductViewApiModel](../models/ProductViewApiModel.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ProductViewApiModel, Utm, VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const utm: Utm = {
    key: 'key',
    value: 'value',
  };

  const input: ProductViewApiModel = {
    itemId: 'itemId',
    category: 'category',
    time: 'time',
    contactId: 'contactId',
    sessionId: 'sessionId',
    newSession: true,
    language: 'language',
    url: 'url',
    externalReferrer: 'externalReferrer',
    utm: [utm],
  };

  const { data } = await voyadoEngage.tracking.productViewVRegisterProductView(input);

  console.log(data);
})();
```

## ProductViewV_RegisterProductViews

Register a collection of views to specific products for given contacts. Request model: - ItemId: Unique SKU/Article Id/Item Id of the viewed product. Will be matched against SKU on the imported articles in Voyado. Ex: "123XYZ" - Category: Category of the product on the website. Will be used for filtering. Ex: "novels &gt; cormac mccarthy &gt; the road" - Time: Time of the product view. ISO8601 with Time Zone Designators. Ex: "2021-09-22T11:00:00+02:00" - ContactId: Contact id of the viewer. GUID or short GUID. Ex: "FF9FD9AF-6778-4714-B0FE-F6E6612840C8" - SessionId: Unique identifier of the session. Ex: "3b7e493b-5dfe-4b98-b6cf-049f2ea4309d" - NewSession: Boolean value that indicates that new session. - Language: Culture code of the cart. A corresponding product feed should be configured. Ex: "sv-SE" - Url: Url of the productview. Ex: "https://www.voyado.com?sku=eu901-011-v10" - ExternalReferrer: The external site that the user came from (clicked a link) Ex: "https://www.google.com"

- HTTP Method: `POST`
- Endpoint: `/api/v2/tracking/productviews`

**Parameters**

| Name | Type                                                      | Required | Description       |
| :--- | :-------------------------------------------------------- | :------- | :---------------- |
| body | [ProductViewApiModel[]](../models/ProductViewApiModel.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.tracking.productViewVRegisterProductViews(input);

  console.log(data);
})();
```
