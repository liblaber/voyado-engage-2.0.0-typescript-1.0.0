// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const searchKey = z.enum(['MobilePhone', 'SocialSecurityNumber']);

export type SearchKey = z.infer<typeof searchKey>;