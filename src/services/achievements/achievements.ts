import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { ApiAchievementValue, apiAchievementValueResponse } from './models/api-achievement-value';
import {
  PagedResultOfApiAchievementDefinition,
  pagedResultOfApiAchievementDefinitionResponse,
} from './models/paged-result-of-api-achievement-definition';
import { AchievementsGetAllAchievementsParams } from './request-params';

export class AchievementsService extends BaseService {
  /**
   *
   * @param {string} contactId -
   * @returns {Promise<HttpResponse<ApiAchievementValue[]>>} OK
   */
  async achievementsGetAchievementsForContact(
    contactId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ApiAchievementValue[]>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/contacts/{contactId}/achievements',
      config: this.config,
      responseSchema: z.array(apiAchievementValueResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    return this.client.call(request);
  }

  /**
   *
   * @param {number} [offset] -
   * @param {number} [count] -
   * @returns {Promise<HttpResponse<PagedResultOfApiAchievementDefinition>>} OK
   */
  async achievementsGetAllAchievements(
    params?: AchievementsGetAllAchievementsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PagedResultOfApiAchievementDefinition>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/achievements',
      config: this.config,
      responseSchema: pagedResultOfApiAchievementDefinitionResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('offset', params?.offset);
    request.addQueryParam('count', params?.count);
    return this.client.call(request);
  }

  /**
   *
   * @param {string} contactId -
   * @param {string} achievementId -
   * @returns {Promise<HttpResponse<any>>} No Content
   */
  async achievementsSetAchievement(
    contactId: string,
    achievementId: string,
    body: any,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<undefined>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/contacts/{contactId}/achievements/{achievementId}',
      config: this.config,
      responseSchema: z.undefined(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addPathParam('achievementId', achievementId);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
   *
   * @param {string} contactId -
   * @param {string} achievementId -
   * @returns {Promise<HttpResponse<any>>} No Content
   */
  async achievementsRemoveAchievement(
    contactId: string,
    achievementId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<undefined>> {
    const request = new Request({
      method: 'DELETE',
      path: '/api/v2/contacts/{contactId}/achievements/{achievementId}',
      config: this.config,
      responseSchema: z.undefined(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('contactId', contactId);
    request.addPathParam('achievementId', achievementId);
    return this.client.call(request);
  }
}
