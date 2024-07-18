// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const challengeAssignmentModelStatus = z.enum(['Unknown', 'Completed', 'NotCompleted', 'Active']);

export type ChallengeAssignmentModelStatus = z.infer<typeof challengeAssignmentModelStatus>;
