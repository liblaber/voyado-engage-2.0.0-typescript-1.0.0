import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { ApiConsentDefinition, apiConsentDefinitionResponse } from './models/api-consent-definition';

export class ConsentsService extends BaseService {
  /**
 * Get all consents definitions

Example of metaData for a Consent:```

"metaData": {
  "conditionText": {
    "sv-SE": "Svensk villkorstext",
    "en-GB": "English text to show for condition"
  },
  "displayText": {
    "sv-SE": "Svensk text att visa",
    "en-GB": "English text to display"
  },
  "linkText": {
    "sv-SE": "Svensk text att visa pÃƒÆ’Ã‚Â¥ lÃƒÆ’Ã‚Â¤nk",
    "en-GB": "English text to show on link"
  }
}```
 * @returns {Promise<HttpResponse<ApiConsentDefinition[]>>} OK
 */
  async consentsGetConsents(requestConfig?: RequestConfig): Promise<HttpResponse<ApiConsentDefinition[]>> {
    const request = new Request({
      method: 'GET',
      path: '/api/v2/consents',
      config: this.config,
      responseSchema: z.array(apiConsentDefinitionResponse),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    return this.client.call(request);
  }
}
