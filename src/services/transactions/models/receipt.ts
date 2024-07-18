import { z } from 'zod';
import { receiptContact, receiptContactRequest, receiptContactResponse } from './receipt-contact';
import { receiptTaxDetail, receiptTaxDetailRequest, receiptTaxDetailResponse } from './receipt-tax-detail';
import {
  receiptPaymentMethod,
  receiptPaymentMethodRequest,
  receiptPaymentMethodResponse,
} from './receipt-payment-method';
import { receiptItem, receiptItemRequest, receiptItemResponse } from './receipt-item';
import {
  receiptUsedBonusCheck,
  receiptUsedBonusCheckRequest,
  receiptUsedBonusCheckResponse,
} from './receipt-used-bonus-check';
import {
  receiptUsedPromotion,
  receiptUsedPromotionRequest,
  receiptUsedPromotionResponse,
} from './receipt-used-promotion';
import {
  receiptExtraDataItem,
  receiptExtraDataItemRequest,
  receiptExtraDataItemResponse,
} from './receipt-extra-data-item';

/**
 * The shape of the model inside the application code - what the users use
 */
export const receipt: any = z.lazy(() => {
  return z.object({
    contact: receiptContact,
    uniqueReceiptId: z.string(),
    receiptNumber: z.string(),
    createdDate: z.string(),
    storeExternalId: z.string(),
    currency: z.string(),
    exchangeRateToGroupCurrency: z.number().gte(0).optional(),
    totalGrossPrice: z.number(),
    taxDetails: z.array(receiptTaxDetail).optional(),
    paymentMethods: z.array(receiptPaymentMethod),
    items: z.array(receiptItem),
    usedBonusChecks: z.array(receiptUsedBonusCheck).optional(),
    usedPromotions: z.array(receiptUsedPromotion).optional(),
    extraData: z.array(receiptExtraDataItem).optional(),
  });
});

/**
 *
 * @typedef  {Receipt} receipt
 * @property {ReceiptContact}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {ReceiptTaxDetail[]}
 * @property {ReceiptPaymentMethod[]}
 * @property {ReceiptItem[]}
 * @property {ReceiptUsedBonusCheck[]}
 * @property {ReceiptUsedPromotion[]}
 * @property {ReceiptExtraDataItem[]}
 */
export type Receipt = z.infer<typeof receipt>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const receiptResponse: any = z.lazy(() => {
  return z
    .object({
      contact: receiptContactResponse,
      uniqueReceiptId: z.string(),
      receiptNumber: z.string(),
      createdDate: z.string(),
      storeExternalId: z.string(),
      currency: z.string(),
      exchangeRateToGroupCurrency: z.number().gte(0).optional(),
      totalGrossPrice: z.number(),
      taxDetails: z.array(receiptTaxDetailResponse).optional(),
      paymentMethods: z.array(receiptPaymentMethodResponse),
      items: z.array(receiptItemResponse),
      usedBonusChecks: z.array(receiptUsedBonusCheckResponse).optional(),
      usedPromotions: z.array(receiptUsedPromotionResponse).optional(),
      extraData: z.array(receiptExtraDataItemResponse).optional(),
    })
    .transform((data) => ({
      contact: data['contact'],
      uniqueReceiptId: data['uniqueReceiptId'],
      receiptNumber: data['receiptNumber'],
      createdDate: data['createdDate'],
      storeExternalId: data['storeExternalId'],
      currency: data['currency'],
      exchangeRateToGroupCurrency: data['exchangeRateToGroupCurrency'],
      totalGrossPrice: data['totalGrossPrice'],
      taxDetails: data['taxDetails'],
      paymentMethods: data['paymentMethods'],
      items: data['items'],
      usedBonusChecks: data['usedBonusChecks'],
      usedPromotions: data['usedPromotions'],
      extraData: data['extraData'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const receiptRequest: any = z.lazy(() => {
  return z
    .object({
      contact: receiptContactRequest.nullish(),
      uniqueReceiptId: z.string().nullish(),
      receiptNumber: z.string().nullish(),
      createdDate: z.string().nullish(),
      storeExternalId: z.string().nullish(),
      currency: z.string().nullish(),
      exchangeRateToGroupCurrency: z.number().nullish(),
      totalGrossPrice: z.number().nullish(),
      taxDetails: z.array(receiptTaxDetailRequest).nullish(),
      paymentMethods: z.array(receiptPaymentMethodRequest).nullish(),
      items: z.array(receiptItemRequest).nullish(),
      usedBonusChecks: z.array(receiptUsedBonusCheckRequest).nullish(),
      usedPromotions: z.array(receiptUsedPromotionRequest).nullish(),
      extraData: z.array(receiptExtraDataItemRequest).nullish(),
    })
    .transform((data) => ({
      contact: data['contact'],
      uniqueReceiptId: data['uniqueReceiptId'],
      receiptNumber: data['receiptNumber'],
      createdDate: data['createdDate'],
      storeExternalId: data['storeExternalId'],
      currency: data['currency'],
      exchangeRateToGroupCurrency: data['exchangeRateToGroupCurrency'],
      totalGrossPrice: data['totalGrossPrice'],
      taxDetails: data['taxDetails'],
      paymentMethods: data['paymentMethods'],
      items: data['items'],
      usedBonusChecks: data['usedBonusChecks'],
      usedPromotions: data['usedPromotions'],
      extraData: data['extraData'],
    }));
});
