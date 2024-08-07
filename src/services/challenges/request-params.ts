// This file was generated by liblab | https://liblab.com/

import {
  ChallengeGetChallengeDefinitionsStatus,
  challengeGetChallengeDefinitionsStatus,
} from './models/challenge-get-challenge-definitions-status';
import { ChallengeGetChallengesFilter, challengeGetChallengesFilter } from './models/challenge-get-challenges-filter';

export interface ChallengeGetChallengeDefinitionsParams {
  offset?: number;
  count?: number;
  status?: ChallengeGetChallengeDefinitionsStatus;
}

export interface ChallengeGetChallengesParams {
  contactId: string;
  definitionId?: string;
  offset?: number;
  count?: number;
  filter?: ChallengeGetChallengesFilter;
}

export interface ChallengeConsentParams {
  contactId: string;
}
