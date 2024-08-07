// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const checkpointAssignOn = z.enum(['None', 'ReceiptTotal', 'ReceiptLineQuantity', 'ReceiptLineTotal']);

export type CheckpointAssignOn = z.infer<typeof checkpointAssignOn>;
