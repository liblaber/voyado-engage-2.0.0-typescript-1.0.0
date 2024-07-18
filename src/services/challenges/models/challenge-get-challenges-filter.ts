import { z } from 'zod';

export const challengeGetChallengesFilter = z.enum(['All', 'Active', 'Completed', 'NotCompleted']);

export type ChallengeGetChallengesFilter = z.infer<typeof challengeGetChallengesFilter>;
