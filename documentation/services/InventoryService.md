# InventoryService

A list of all methods in the `InventoryService` service. Click on the method name to view detailed information about that method.

| Methods                                                                     | Description                                                                                                                                                                                                                                                                                                                                                               |
| :-------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Inventory_UpdateStockLevel](#inventory_updatestocklevel)                   | Update stock level for a specific SKU. Request model: - Sku*: Unique SKU of the product. E.g: "123XYZ" - Quantity*: The latest stock quantity of the product. E.g: 10 - Locale: Culture code. A corresponding product feed should be configured. E.g: "sv-se" - ExternalId: External identifier. E.g: "SE-123XYZ" \* required                                             |
| [Inventory_UpdateStockLevels](#inventory_updatestocklevels)                 | Batch update of stock levels for multiple SKU's. Request model: - Sku*: Unique SKU of the product. E.g: "123XYZ" - Quantity*: The latest stock quantity of the product. E.g: 10 - Locale: Culture code. A corresponding product feed should be configured. E.g: "sv-se" - ExternalId: External identifier. E.g: "SE-123XYZ" \* required                                   |
| [BackInStockSubscription_Subscribe](#backinstocksubscription_subscribe)     | Create a back in stock subscription for a specific SKU. Request model: - ContactId*: Contact id of the subscriber. E.g: "FF9FD9AF-6778-4714-B0FE-F6E6612840C8" - Sku*: Unique SKU of the product. E.g: "123XYZ" - Locale\*: Culture code. A corresponding product feed should be configured. E.g: "sv-se" - ExternalId: External identifier. E.g: "SE-123XYZ" \* required |
| [BackInStockSubscription_Unsubscribe](#backinstocksubscription_unsubscribe) | Delete a specific back in stock subscription.                                                                                                                                                                                                                                                                                                                             |

## Inventory_UpdateStockLevel

Update stock level for a specific SKU. Request model: - Sku*: Unique SKU of the product. E.g: "123XYZ" - Quantity*: The latest stock quantity of the product. E.g: 10 - Locale: Culture code. A corresponding product feed should be configured. E.g: "sv-se" - ExternalId: External identifier. E.g: "SE-123XYZ" \* required

- HTTP Method: `PUT`
- Endpoint: `/api/v2/inventory/stock-levels`

**Parameters**

| Name | Type                                                | Required | Description       |
| :--- | :-------------------------------------------------- | :------- | :---------------- |
| body | [StockLevelRequest](../models/StockLevelRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { StockLevelRequest, VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const input: StockLevelRequest = {
    sku: 'sku',
    locale: 'locale',
    quantity: 6,
    externalId: 'externalId',
  };

  const { data } = await voyadoEngage.inventory.inventoryUpdateStockLevel(input);

  console.log(data);
})();
```

## Inventory_UpdateStockLevels

Batch update of stock levels for multiple SKU's. Request model: - Sku*: Unique SKU of the product. E.g: "123XYZ" - Quantity*: The latest stock quantity of the product. E.g: 10 - Locale: Culture code. A corresponding product feed should be configured. E.g: "sv-se" - ExternalId: External identifier. E.g: "SE-123XYZ" \* required

- HTTP Method: `PUT`
- Endpoint: `/api/v2/inventory/stock-levels/batch`

**Parameters**

| Name | Type                                                  | Required | Description       |
| :--- | :---------------------------------------------------- | :------- | :---------------- |
| body | [StockLevelRequest[]](../models/StockLevelRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.inventory.inventoryUpdateStockLevels(input);

  console.log(data);
})();
```

## BackInStockSubscription_Subscribe

Create a back in stock subscription for a specific SKU. Request model: - ContactId*: Contact id of the subscriber. E.g: "FF9FD9AF-6778-4714-B0FE-F6E6612840C8" - Sku*: Unique SKU of the product. E.g: "123XYZ" - Locale\*: Culture code. A corresponding product feed should be configured. E.g: "sv-se" - ExternalId: External identifier. E.g: "SE-123XYZ" \* required

- HTTP Method: `POST`
- Endpoint: `/api/v2/inventory/backinstock/subscriptions`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [SubscriptionRequest](../models/SubscriptionRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SubscriptionRequest, VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const input: SubscriptionRequest = {
    contactId: '00000000-0000-0000-0000-000000000000',
    sku: 'sku',
    locale: 'locale',
    externalId: 'externalId',
  };

  const { data } = await voyadoEngage.inventory.backInStockSubscriptionSubscribe(input);

  console.log(data);
})();
```

## BackInStockSubscription_Unsubscribe

Delete a specific back in stock subscription.

- HTTP Method: `DELETE`
- Endpoint: `/api/v2/inventory/backinstock/subscriptions/{subscriptionId}`

**Parameters**

| Name           | Type   | Required | Description |
| :------------- | :----- | :------- | :---------- |
| subscriptionId | string | ✅       |             |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.inventory.backInStockSubscriptionUnsubscribe('subscriptionId');

  console.log(data);
})();
```
