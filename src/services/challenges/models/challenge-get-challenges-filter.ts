// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const challengeGetChallengesFilter = z.enum(['All', 'Active', 'Completed', 'NotCompleted']);

export type ChallengeGetChallengesFilter = z.infer<typeof challengeGetChallengesFilter>;
