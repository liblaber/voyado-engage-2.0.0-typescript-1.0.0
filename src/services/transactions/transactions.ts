// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { Receipt, receiptRequest } from './models/receipt';
import { ImportTransactionsObject, importTransactionsObjectRequest } from './models/import-transactions-object';

export class TransactionsService extends BaseService {
  /**
 * The /receipts endpoint is used to store each customers purchase and returns in Engage.
All fields in the data model can be used for segmentation and analysis in Engage.
If you want to send out transactional emails, use the /orders endpoint instead.

### Identification

To be able to store a receipt in Voyado, you need to connect it to a specific 
contact.

In the example payload below the contact type is ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œMemberÃƒÂ¢Ã¢â€šÂ¬Ã‚Â and the key type is ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œemailÃƒÂ¢Ã¢â€šÂ¬Ã‚Â 
The key has to be a unique data field for the specific contact type, 
normally one of these fields:
- contactId
- email
- mobilePhone
- memberNumber
- externalId
- socialSecurityNumber (personal identity number - only Swedish or Finnish)
 * @returns {Promise<HttpResponse<any>>} 
 */
  async importTransactionsImportReceipts(body: Receipt, requestConfig?: RequestConfig): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/receipts',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: receiptRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
 * Required on **receipt**: 
externalId (Unique receipt id), invoiceNumber, customerKey, 
customerKeyType, invoiceCreatedDate, InvoiceModifiedDate, StoreName, StoreNumber

Required on **transaction**: 
externalId (Unique transaction id), articleNr, quantity, price and type (RETURN/DISCOUNT/PURCHASE)
Note! It's recommended to include Sku, as it's a required 
attribute when enriching purchase data from article data.
 * @returns {Promise<HttpResponse<any>>} OK
 */
  async importTransactionsImport(
    body: ImportTransactionsObject,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/api/v2/transactions',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: importTransactionsObjectRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }
}
