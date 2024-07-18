import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import {
  MultichannelPromotionModel,
  multichannelPromotionModelRequest,
  multichannelPromotionModelResponse,
} from './models/multichannel-promotion-model';
import { StatusCodeResult, statusCodeResultResponse } from '../common/status-code-result';
import {
  PromotionValidityModel,
  promotionValidityModelRequest,
  promotionValidityModelResponse,
} from './models/promotion-validity-model';
import {
  MultichannelPromotionsDeleteByExternalIdParams,
  MultichannelPromotionsGetByExternalIdParams,
  MultichannelPromotionsGetByValidityExternalIdParams,
} from './request-params';
import {
  MultichannelBasePromotionModel,
  multichannelBasePromotionModelRequest,
} from './models/multichannel-base-promotion-model';
import { RedeemBodyModel, redeemBodyModelRequest } from '../common/redeem-body-model';

export class PromotionsService extends BaseService {
  /**
   * Gets the multichannel promotion with the identifier which is set by Voyado
   * @param {string} id - Promotion identifier from Voyado
   * @returns {Promise<HttpResponse<MultichannelPromotionModel>>} OK
   */
  async multichannelPromotionsGetById(
    id: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<MultichannelPromotionModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/promotions/multichannels/{id}',
      config: this.config,
      responseSchema: multichannelPromotionModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('id', id);
    return this.client.call(request);
  }

  /**
 * Updates an existing multichannel promotion. 
Only multichannel promotion in status 'Draft' can be updated.
 * @param {string} id - Voyado multichannel promotion identifier
 * @returns {Promise<HttpResponse<MultichannelPromotionModel>>} OK
 */
  async multichannelPromotionsUpdate(
    id: string,
    body: MultichannelPromotionModel,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<MultichannelPromotionModel>> {
    const request = new Request({
      method: 'PUT',
      body,
      path: '/api/v2/promotions/multichannels/{id}',
      config: this.config,
      responseSchema: multichannelPromotionModelResponse,
      requestSchema: multichannelPromotionModelRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('id', id);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
   * Only unassigned multichannel promotions can be deleted
   * @param {string} id - Voyado identifier to a multichannel promotion
   * @returns {Promise<HttpResponse<StatusCodeResult>>} OK
   */
  async multichannelPromotionsDeleteById(
    id: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<StatusCodeResult>> {
    const request = new Request({
      method: 'DELETE',
      path: '/api/v2/promotions/multichannels/{id}',
      config: this.config,
      responseSchema: statusCodeResultResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('id', id);
    return this.client.call(request);
  }

  /**
   * Gets the multichannel promotion with the identifier which is an internal reference for Voyado
   * @param {string} id - Identifier inside of Voyado
   * @returns {Promise<HttpResponse<PromotionValidityModel>>} OK
   */
  async multichannelPromotionsGetValidityById(
    id: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PromotionValidityModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/promotions/multichannels/{id}/validity',
      config: this.config,
      responseSchema: promotionValidityModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('id', id);
    return this.client.call(request);
  }

  /**
 * Updates duration of an existing multichannel promotion. 
Only multichannel promotion in status 'Draft' can be updated.
 * @param {string} id - Voyado multichannel promotion identifier
 * @returns {Promise<HttpResponse<MultichannelPromotionModel>>} OK
 */
  async multichannelPromotionsUpdateValidity(
    id: string,
    body: PromotionValidityModel,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<MultichannelPromotionModel>> {
    const request = new Request({
      method: 'PUT',
      body,
      path: '/api/v2/promotions/multichannels/{id}/validity',
      config: this.config,
      responseSchema: multichannelPromotionModelResponse,
      requestSchema: promotionValidityModelRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('id', id);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
   * Gets the multichannel promotion with the identifier which is an external reference for Voyado
   * @param {string} externalId - External identifier outside of Voyado
   * @returns {Promise<HttpResponse<MultichannelPromotionModel>>} OK
   */
  async multichannelPromotionsGetByExternalId(
    params: MultichannelPromotionsGetByExternalIdParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<MultichannelPromotionModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/promotions/multichannels',
      config: this.config,
      responseSchema: multichannelPromotionModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('externalId', params?.externalId);
    return this.client.call(request);
  }

  /**
   * Only creates multichannel promotion in status 'Draft'.
   * @returns {Promise<HttpResponse<MultichannelPromotionModel>>} Created
   */
  async multichannelPromotionsCreate(
    body: MultichannelBasePromotionModel,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<MultichannelPromotionModel>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/promotions/multichannels',
      config: this.config,
      responseSchema: multichannelPromotionModelResponse,
      requestSchema: multichannelBasePromotionModelRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
   * Only unassigned multichannel promotions can be deleted
   * @param {string} externalId - External identifier to a multichannel promotion
   * @returns {Promise<HttpResponse<StatusCodeResult>>} OK
   */
  async multichannelPromotionsDeleteByExternalId(
    params: MultichannelPromotionsDeleteByExternalIdParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<StatusCodeResult>> {
    const request = new Request({
      method: 'DELETE',
      path: '/api/v2/promotions/multichannels',
      config: this.config,
      responseSchema: statusCodeResultResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('externalId', params?.externalId);
    return this.client.call(request);
  }

  /**
   * Gets the multichannel promotion validity with the identifier which is an external reference for Voyado
   * @param {string} externalId - External identifier outside of Voyado
   * @returns {Promise<HttpResponse<PromotionValidityModel>>} OK
   */
  async multichannelPromotionsGetByValidityExternalId(
    params: MultichannelPromotionsGetByValidityExternalIdParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PromotionValidityModel>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/promotions/multichannels/validity',
      config: this.config,
      responseSchema: promotionValidityModelResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('externalId', params?.externalId);
    return this.client.call(request);
  }

  /**
 * Redeem a promotion (multichannel offer or mobile swipe) for a Contact using the internal promotion Id

Redemption channel can be POS, ECOM or OTHER.
 * @param {string} promotionId - The id of the promotion
 * @returns {Promise<HttpResponse<any>>} OK
 */
  async offerPromotionsRedeemByPromotionId(
    promotionId: string,
    body: RedeemBodyModel,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/promotions/codes/{promotionId}/redeem',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: redeemBodyModelRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('promotionId', promotionId);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
   * Reactivate a redeemed reward voucher
   * @param {string} id - The id of the reward voucher
   * @returns {Promise<HttpResponse<string>>} OK
   */
  async offerPromotionsReactivatePromotionCode(
    id: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<string>> {
    const request = new Request({
      method: 'POST',
      path: '/api/v2/promotions/reward-vouchers/{id}/reactivate',
      config: this.config,
      responseSchema: z.string(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('id', id);
    return this.client.call(request);
  }
}
