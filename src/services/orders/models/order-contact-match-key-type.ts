import { z } from 'zod';

export const orderContactMatchKeyType = z.enum([
  'Email',
  'SocialSecurityNumber',
  'MobilePhone',
  'CardId',
  'ExternalId',
  'MemberNumber',
  'ContactId',
  'MemberNumberWithCardNumberAsFallback',
]);

export type OrderContactMatchKeyType = z.infer<typeof orderContactMatchKeyType>;
