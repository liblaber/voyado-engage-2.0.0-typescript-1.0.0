import { z } from 'zod';

export const challengeDefinitionModelStatus = z.enum(['All', 'Active', 'Draft', 'Scheduled', 'Ended']);

export type ChallengeDefinitionModelStatus = z.infer<typeof challengeDefinitionModelStatus>;
