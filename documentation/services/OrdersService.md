# OrdersService

A list of all methods in the `OrdersService` service. Click on the method name to view detailed information about that method.

| Methods                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :-------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Orders_RegisterOrder](#orders_registerorder) | The /orders endpoint is used to trigger automation flows in Engage and send out information about the order to your end customers. It could be used, for example, for an order confirmation, delivery confirmation or a return confirmation from an e-commerce system or store. The endpoint is called every time a change happens that you want to act on in Engage. All the data needed must be sent with every call, since this endpoint saves no data concerning orders. If you need to save data, use the /receipts endpoint instead. Note that there is no check against previous requests of the same order, thus two identical requests to this endpoint will trigger any matching automation twice. To accept an order: - The different orderStatus and paymentStatus values must be configured in Voyado. - totalGrossPrice, totalTax, item quantities etc. must be correct and add up. If the order is not accepted, a response with HTTP Status Code 400 or 422 and an error code will be returned. |

## Orders_RegisterOrder

The /orders endpoint is used to trigger automation flows in Engage and send out information about the order to your end customers. It could be used, for example, for an order confirmation, delivery confirmation or a return confirmation from an e-commerce system or store. The endpoint is called every time a change happens that you want to act on in Engage. All the data needed must be sent with every call, since this endpoint saves no data concerning orders. If you need to save data, use the /receipts endpoint instead. Note that there is no check against previous requests of the same order, thus two identical requests to this endpoint will trigger any matching automation twice. To accept an order: - The different orderStatus and paymentStatus values must be configured in Voyado. - totalGrossPrice, totalTax, item quantities etc. must be correct and add up. If the order is not accepted, a response with HTTP Status Code 400 or 422 and an error code will be returned.

- HTTP Method: `POST`
- Endpoint: `/api/v2/orders`

**Parameters**

| Name | Type                        | Required | Description       |
| :--- | :-------------------------- | :------- | :---------------- |
| body | [Order](../models/Order.md) | ✅       | The request body. |

**Return Type**

`StatusCodeResult`

**Example Usage Code Snippet**

```typescript
import { Order, OrderContact, OrderFee, OrderItem, OrderPaymentMethod, TaxDetail, VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const orderContactMatchKeyType = OrderContactMatchKeyType.Email;

  const orderContact: OrderContact = {
    matchKey: 'matchKey',
    matchKeyType: orderContactMatchKeyType,
  };

  const taxDetail: TaxDetail = {
    description: 'description',
    value: 3.2,
    percent: 2.12,
    totalIncludingTax: 0.44,
    totalExcludingTax: 8.29,
  };

  const orderPaymentMethod: OrderPaymentMethod = {
    type: 'type',
    description: 'description',
    value: 0.16,
    extraData: [],
  };

  const orderItemType = OrderItemType.PURCHASE;

  const orderItemDiscount: OrderItemDiscount = {
    value: -1551498524.49,
    type: 'type',
    description: 'description',
    extraData: [],
  };

  const orderItem: OrderItem = {
    type: orderItemType,
    sku: 'sku',
    quantity: 4.71,
    grossPaidPrice: 6,
    grossPaidPricePerUnit: 5.42,
    taxAmount: 3.46,
    taxPercent: 9.73,
    description: 'description',
    imageUrl: 'imageUrl',
    targetUrl: 'targetUrl',
    extraData: [],
    totalDiscount: 9.63,
    originalPrice: 3.79,
    originalPricePerUnit: 5.55,
    discounts: [orderItemDiscount],
    discounted: true,
  };

  const orderFee: OrderFee = {
    value: 6.6,
    tax: 3.96,
    taxPercent: 9.16,
  };

  const input: Order = {
    contact: orderContact,
    orderNumber: 'orderNumber',
    orderStatus: 'orderStatus',
    paymentStatus: 'paymentStatus',
    language: 'language',
    createdDate: 'createdDate',
    shippingDate: 'shippingDate',
    statusChangedDate: 'statusChangedDate',
    storeId: 'storeId',
    currency: 'currency',
    exchangeRateToGroupCurrency: 0.07,
    extraData: [],
    totalGrossPrice: 7.82,
    totalTax: 2.7,
    taxDetails: [taxDetail],
    paymentMethods: [orderPaymentMethod],
    items: [orderItem],
    freightFee: orderFee,
    handlingFee: orderFee,
    totalRoundOff: orderFee,
    totalDiscounts: 2.02,
    totalOriginalPrice: 2.62,
    totalItemsPrice: 2.77,
    totalNetPrice: 6.08,
    anyReturnItems: true,
  };

  const { data } = await voyadoEngage.orders.ordersRegisterOrder(input);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
