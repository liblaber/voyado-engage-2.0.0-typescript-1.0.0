import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { ChallengeAssignmentModel, challengeAssignmentModelResponse } from './models/challenge-assignment-model';
import { ChallengeDefinitionModel, challengeDefinitionModelResponse } from './models/challenge-definition-model';
import {
  ChallengeDefinitionModelsResult,
  challengeDefinitionModelsResultResponse,
} from './models/challenge-definition-models-result';
import {
  ChallengeConsentParams,
  ChallengeGetChallengeDefinitionsParams,
  ChallengeGetChallengesParams,
} from './request-params';
import {
  ChallengeAssignmentModelsResult,
  challengeAssignmentModelsResultResponse,
} from './models/challenge-assignment-models-result';
import { ChallengeCheckPointDto, challengeCheckPointDtoRequest } from './models/challenge-check-point-dto';
import {
  AddCheckpointToChallengeAssignmentResult,
  addCheckpointToChallengeAssignmentResultResponse,
} from './models/add-checkpoint-to-challenge-assignment-result';

export class ChallengesService extends BaseService {
  /**
   * Get an challenge assignment by id.
   * @param {string} id - Assignment id
   * @returns {Promise<HttpResponse<ChallengeAssignmentModel>>} OK
   */
  async challengeGetChallengeById(
    id: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ChallengeAssignmentModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/challenges/{id}',
      config: this.config,
      responseSchema: challengeAssignmentModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('id', id);
    return this.client.call(request);
  }

  /**
   * Get a challenge definition by id.
   * @param {string} id - Definition id
   * @returns {Promise<HttpResponse<ChallengeDefinitionModel>>} OK
   */
  async challengeGetChallengeDefinitionById(
    id: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ChallengeDefinitionModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/challenges/definitions/{id}',
      config: this.config,
      responseSchema: challengeDefinitionModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('id', id);
    return this.client.call(request);
  }

  /**
   * Get a list of all the challenge definitions.
   * @param {number} [offset] - Defaults to 0
   * @param {number} [count] - Defaults to 100
   * @param {ChallengeGetChallengeDefinitionsStatus} [status] - All, Active, Draft or Ended. If not specified it will default to All
   * @returns {Promise<HttpResponse<ChallengeDefinitionModelsResult>>} OK
   */
  async challengeGetChallengeDefinitions(
    params?: ChallengeGetChallengeDefinitionsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ChallengeDefinitionModelsResult>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/challenges/definitions',
      config: this.config,
      responseSchema: challengeDefinitionModelsResultResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('offset', params?.offset);
    request.addQueryParam('count', params?.count);
    request.addQueryParam('status', params?.status);
    return this.client.call(request);
  }

  /**
   * Search for challenges for a contact.
   * @param {string} contactId - Contact id
   * @param {string} [definitionId] - Definition id - Optional to limit to a certain challenge definition
   * @param {number} [offset] - Defaults to 0
   * @param {number} [count] - Defaults to 100
   * @param {ChallengeGetChallengesFilter} [filter] - All, Active, Completed or NotCompleted. If not specified it will default to All
   * @returns {Promise<HttpResponse<ChallengeAssignmentModelsResult>>} OK
   */
  async challengeGetChallenges(
    params: ChallengeGetChallengesParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ChallengeAssignmentModelsResult>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/challenges',
      config: this.config,
      responseSchema: challengeAssignmentModelsResultResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('contactId', params?.contactId);
    request.addQueryParam('definitionId', params?.definitionId);
    request.addQueryParam('offset', params?.offset);
    request.addQueryParam('count', params?.count);
    request.addQueryParam('filter', params?.filter);
    return this.client.call(request);
  }

  /**
 * Send in a list of checkpoints to be assigned to a some challenge for a number of contacts,
the endpoint will able to take max 1000 checkpoint rows.
            
### The following fields should be provided:
            
- definitionId: Must be a Guid
- contactId: Must be a Guid
- checkPointAmount: Number of checkpoints to assign to the challenge
            
### Important info:
If some rows are not correct it will still result in an accepted response code and be skipped. Please
check the response for NotAccepted items
 * @returns {Promise<HttpResponse<AddCheckpointToChallengeAssignmentResult>>} OK
 */
  async challengeAddChallengeCheckPoints(
    body: ChallengeCheckPointDto[],
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<AddCheckpointToChallengeAssignmentResult>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/challenges/checkpoints',
      config: this.config,
      responseSchema: addCheckpointToChallengeAssignmentResultResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
 * Will assign the challenge for the contact and return true. If the contact already
has been assigned for the challenge it will also return true.
 * @param {string} id - Definition id
 * @param {string} contactId - Contact id
 * @returns {Promise<HttpResponse<boolean>>} OK
 */
  async challengeConsent(
    id: string,
    params: ChallengeConsentParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<boolean>> {
    const request = new Request({
      method: 'POST',
      path: '/api/v2/challenges/definitions/{id}/assign',
      config: this.config,
      responseSchema: z.boolean(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('id', id);
    request.addQueryParam('contactId', params?.contactId);
    return this.client.call(request);
  }
}
