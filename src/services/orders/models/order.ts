import { z } from 'zod';
import { orderContact, orderContactRequest, orderContactResponse } from './order-contact';
import { taxDetail, taxDetailRequest, taxDetailResponse } from './tax-detail';
import { orderPaymentMethod, orderPaymentMethodRequest, orderPaymentMethodResponse } from './order-payment-method';
import { orderItem, orderItemRequest, orderItemResponse } from './order-item';
import { orderFee, orderFeeRequest, orderFeeResponse } from './order-fee';

/**
 * The shape of the model inside the application code - what the users use
 */
export const order: any = z.lazy(() => {
  return z.object({
    contact: orderContact,
    orderNumber: z.string(),
    orderStatus: z.string(),
    paymentStatus: z.string(),
    language: z.string().optional(),
    createdDate: z.string(),
    shippingDate: z.string().optional(),
    statusChangedDate: z.string().optional(),
    storeId: z.string(),
    currency: z.string(),
    exchangeRateToGroupCurrency: z.number().optional(),
    extraData: z.any().optional(),
    totalGrossPrice: z.number(),
    totalTax: z.number().optional(),
    taxDetails: z.array(taxDetail).optional(),
    paymentMethods: z.array(orderPaymentMethod).optional(),
    items: z.array(orderItem),
    freightFee: orderFee.optional(),
    handlingFee: orderFee.optional(),
    totalRoundOff: orderFee.optional(),
    totalDiscounts: z.number().optional(),
    totalOriginalPrice: z.number().optional(),
    totalItemsPrice: z.number().optional(),
    totalNetPrice: z.number().optional(),
    anyReturnItems: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {Order} order
 * @property {OrderContact}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {any}
 * @property {number}
 * @property {number}
 * @property {TaxDetail[]}
 * @property {OrderPaymentMethod[]}
 * @property {OrderItem[]}
 * @property {OrderFee}
 * @property {OrderFee}
 * @property {OrderFee}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {boolean}
 */
export type Order = z.infer<typeof order>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const orderResponse: any = z.lazy(() => {
  return z
    .object({
      contact: orderContactResponse,
      orderNumber: z.string(),
      orderStatus: z.string(),
      paymentStatus: z.string(),
      language: z.string().optional(),
      createdDate: z.string(),
      shippingDate: z.string().optional(),
      statusChangedDate: z.string().optional(),
      storeId: z.string(),
      currency: z.string(),
      exchangeRateToGroupCurrency: z.number().optional(),
      extraData: z.any().optional(),
      totalGrossPrice: z.number(),
      totalTax: z.number().optional(),
      taxDetails: z.array(taxDetailResponse).optional(),
      paymentMethods: z.array(orderPaymentMethodResponse).optional(),
      items: z.array(orderItemResponse),
      freightFee: orderFeeResponse.optional(),
      handlingFee: orderFeeResponse.optional(),
      totalRoundOff: orderFeeResponse.optional(),
      totalDiscounts: z.number().optional(),
      totalOriginalPrice: z.number().optional(),
      totalItemsPrice: z.number().optional(),
      totalNetPrice: z.number().optional(),
      anyReturnItems: z.boolean().optional(),
    })
    .transform((data) => ({
      contact: data['contact'],
      orderNumber: data['orderNumber'],
      orderStatus: data['orderStatus'],
      paymentStatus: data['paymentStatus'],
      language: data['language'],
      createdDate: data['createdDate'],
      shippingDate: data['shippingDate'],
      statusChangedDate: data['statusChangedDate'],
      storeId: data['storeId'],
      currency: data['currency'],
      exchangeRateToGroupCurrency: data['exchangeRateToGroupCurrency'],
      extraData: data['extraData'],
      totalGrossPrice: data['totalGrossPrice'],
      totalTax: data['totalTax'],
      taxDetails: data['taxDetails'],
      paymentMethods: data['paymentMethods'],
      items: data['items'],
      freightFee: data['freightFee'],
      handlingFee: data['handlingFee'],
      totalRoundOff: data['totalRoundOff'],
      totalDiscounts: data['totalDiscounts'],
      totalOriginalPrice: data['totalOriginalPrice'],
      totalItemsPrice: data['totalItemsPrice'],
      totalNetPrice: data['totalNetPrice'],
      anyReturnItems: data['anyReturnItems'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const orderRequest: any = z.lazy(() => {
  return z
    .object({
      contact: orderContactRequest.nullish(),
      orderNumber: z.string().nullish(),
      orderStatus: z.string().nullish(),
      paymentStatus: z.string().nullish(),
      language: z.string().nullish(),
      createdDate: z.string().nullish(),
      shippingDate: z.string().nullish(),
      statusChangedDate: z.string().nullish(),
      storeId: z.string().nullish(),
      currency: z.string().nullish(),
      exchangeRateToGroupCurrency: z.number().nullish(),
      extraData: z.any().nullish(),
      totalGrossPrice: z.number().nullish(),
      totalTax: z.number().nullish(),
      taxDetails: z.array(taxDetailRequest).nullish(),
      paymentMethods: z.array(orderPaymentMethodRequest).nullish(),
      items: z.array(orderItemRequest).nullish(),
      freightFee: orderFeeRequest.nullish(),
      handlingFee: orderFeeRequest.nullish(),
      totalRoundOff: orderFeeRequest.nullish(),
      totalDiscounts: z.number().nullish(),
      totalOriginalPrice: z.number().nullish(),
      totalItemsPrice: z.number().nullish(),
      totalNetPrice: z.number().nullish(),
      anyReturnItems: z.boolean().nullish(),
    })
    .transform((data) => ({
      contact: data['contact'],
      orderNumber: data['orderNumber'],
      orderStatus: data['orderStatus'],
      paymentStatus: data['paymentStatus'],
      language: data['language'],
      createdDate: data['createdDate'],
      shippingDate: data['shippingDate'],
      statusChangedDate: data['statusChangedDate'],
      storeId: data['storeId'],
      currency: data['currency'],
      exchangeRateToGroupCurrency: data['exchangeRateToGroupCurrency'],
      extraData: data['extraData'],
      totalGrossPrice: data['totalGrossPrice'],
      totalTax: data['totalTax'],
      taxDetails: data['taxDetails'],
      paymentMethods: data['paymentMethods'],
      items: data['items'],
      freightFee: data['freightFee'],
      handlingFee: data['handlingFee'],
      totalRoundOff: data['totalRoundOff'],
      totalDiscounts: data['totalDiscounts'],
      totalOriginalPrice: data['totalOriginalPrice'],
      totalItemsPrice: data['totalItemsPrice'],
      totalNetPrice: data['totalNetPrice'],
      anyReturnItems: data['anyReturnItems'],
    }));
});
