import { z } from 'zod';

export const challengeAssignmentModelStatus = z.enum(['Unknown', 'Completed', 'NotCompleted', 'Active']);

export type ChallengeAssignmentModelStatus = z.infer<typeof challengeAssignmentModelStatus>;
