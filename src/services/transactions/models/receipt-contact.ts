import { z } from 'zod';
import { receiptContactMatchKeyType } from './receipt-contact-match-key-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const receiptContact: any = z.lazy(() => {
  return z.object({
    matchKey: z.string(),
    matchKeyType: receiptContactMatchKeyType,
    contactType: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ReceiptContact} receiptContact
 * @property {string}
 * @property {ReceiptContactMatchKeyType}
 * @property {string}
 */
export type ReceiptContact = z.infer<typeof receiptContact>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const receiptContactResponse: any = z.lazy(() => {
  return z
    .object({
      matchKey: z.string(),
      matchKeyType: receiptContactMatchKeyType,
      contactType: z.string().optional(),
    })
    .transform((data) => ({
      matchKey: data['matchKey'],
      matchKeyType: data['matchKeyType'],
      contactType: data['contactType'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const receiptContactRequest: any = z.lazy(() => {
  return z
    .object({
      matchKey: z.string().nullish(),
      matchKeyType: receiptContactMatchKeyType.nullish(),
      contactType: z.string().nullish(),
    })
    .transform((data) => ({
      matchKey: data['matchKey'],
      matchKeyType: data['matchKeyType'],
      contactType: data['contactType'],
    }));
});
