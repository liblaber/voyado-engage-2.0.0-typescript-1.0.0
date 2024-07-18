import { z } from 'zod';

export const receiptContactMatchKeyType = z.enum([
  'Email',
  'SocialSecurityNumber',
  'MobilePhone',
  'CardId',
  'ExternalId',
  'MemberNumber',
  'ContactId',
  'MemberNumberWithCardNumberAsFallback',
]);

export type ReceiptContactMatchKeyType = z.infer<typeof receiptContactMatchKeyType>;
