# OrdersService

A list of all methods in the `OrdersService` service. Click on the method name to view detailed information about that method.

| Methods                                       | Description                                                                                                                        |
| :-------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| [Orders_RegisterOrder](#orders_registerorder) | The /orders endpoint is used to trigger automation flows in Engage and send out information about the order to your end customers. |

&nbsp;It could be used, for example, for an order confirmation, delivery confirmation or a return confirmation from an e-commerce
&nbsp;system or store. The endpoint is called every time a change happens that you want to act on in Engage. All the data needed must
&nbsp;be sent with every call, since this endpoint saves no data concerning orders. If you need to save data, use the /receipts endpoint instead.
&nbsp;
&nbsp;Note that there is no check against previous requests of the same order,
&nbsp;thus two identical requests to this endpoint will trigger any matching automation twice.
&nbsp;&nbsp;
&nbsp;To accept an order:
&nbsp;- The different orderStatus and paymentStatus values must be configured in Voyado.
&nbsp;- totalGrossPrice, totalTax, item quantities etc. must be correct and add up.
&nbsp;
&nbsp;If the order is not accepted, a response with HTTP Status Code 400 or 422 and an error code will be returned. |

## Orders_RegisterOrder

The /orders endpoint is used to trigger automation flows in Engage and send out information about the order to your end customers.
&nbsp;It could be used, for example, for an order confirmation, delivery confirmation or a return confirmation from an e-commerce
&nbsp;system or store. The endpoint is called every time a change happens that you want to act on in Engage. All the data needed must
&nbsp;be sent with every call, since this endpoint saves no data concerning orders. If you need to save data, use the /receipts endpoint instead.
&nbsp;
&nbsp;Note that there is no check against previous requests of the same order,
&nbsp;thus two identical requests to this endpoint will trigger any matching automation twice.
&nbsp;&nbsp;
&nbsp;To accept an order:
&nbsp;- The different orderStatus and paymentStatus values must be configured in Voyado.
&nbsp;- totalGrossPrice, totalTax, item quantities etc. must be correct and add up.
&nbsp;
&nbsp;If the order is not accepted, a response with HTTP Status Code 400 or 422 and an error code will be returned.

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
    value: 5.55,
    percent: 1.96,
    totalIncludingTax: 9.77,
    totalExcludingTax: 8.29,
  };

  const orderPaymentMethod: OrderPaymentMethod = {
    type_: 'type',
    description: 'description',
    value: 7.44,
    extraData: [],
  };

  const orderItemType = OrderItemType.PURCHASE;

  const orderItemDiscount: OrderItemDiscount = {
    value: -273220990.98,
    type_: 'type',
    description: 'description',
    extraData: [],
  };

  const orderItem: OrderItem = {
    type_: orderItemType,
    sku: 'sku',
    quantity: 0.1,
    grossPaidPrice: 3.23,
    grossPaidPricePerUnit: 2.41,
    taxAmount: 4.68,
    taxPercent: 2.6,
    description: 'description',
    imageUrl: 'imageUrl',
    targetUrl: 'targetUrl',
    extraData: [],
    totalDiscount: 2.06,
    originalPrice: 5.07,
    originalPricePerUnit: 5.96,
    discounts: [orderItemDiscount],
    discounted: true,
  };

  const orderFee: OrderFee = {
    value: 9.6,
    tax: 0.26,
    taxPercent: 9.9,
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
    exchangeRateToGroupCurrency: 9.6,
    extraData: [],
    totalGrossPrice: 9.8,
    totalTax: 7.73,
    taxDetails: [taxDetail],
    paymentMethods: [orderPaymentMethod],
    items: [orderItem],
    freightFee: orderFee,
    handlingFee: orderFee,
    totalRoundOff: orderFee,
    totalDiscounts: 1.47,
    totalOriginalPrice: 7.35,
    totalItemsPrice: 2.46,
    totalNetPrice: 1.99,
    anyReturnItems: true,
  };

  const { data } = await voyadoEngage.orders.ordersRegisterOrder(input);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
