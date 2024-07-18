import { z } from 'zod';

export const challengeGetChallengeDefinitionsStatus = z.enum(['All', 'Active', 'Draft', 'Scheduled', 'Ended']);

export type ChallengeGetChallengeDefinitionsStatus = z.infer<typeof challengeGetChallengeDefinitionsStatus>;
