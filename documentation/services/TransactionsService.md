# TransactionsService

A list of all methods in the `TransactionsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :---------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [ImportTransactions_ImportReceipts](#importtransactions_importreceipts) | The /receipts endpoint is used to store each customers purchase and returns in Engage. All fields in the data model can be used for segmentation and analysis in Engage. If you want to send out transactional emails, use the /orders endpoint instead. ### Identification To be able to store a receipt in Voyado, you need to connect it to a specific contact. In the example payload below the contact type is ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œMemberÃƒÂ¢Ã¢â€šÂ¬Ã‚Â and the key type is ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œemailÃƒÂ¢Ã¢â€šÂ¬Ã‚Â The key has to be a unique data field for the specific contact type, normally one of these fields: - contactId - email - mobilePhone - memberNumber - externalId - socialSecurityNumber (personal identity number - only Swedish or Finnish) |
| [ImportTransactions_Import](#importtransactions_import)                 | Required on **receipt**: externalId (Unique receipt id), invoiceNumber, customerKey, customerKeyType, invoiceCreatedDate, InvoiceModifiedDate, StoreName, StoreNumber Required on **transaction**: externalId (Unique transaction id), articleNr, quantity, price and type (RETURN/DISCOUNT/PURCHASE) Note! It's recommended to include Sku, as it's a required attribute when enriching purchase data from article data.                                                                                                                                                                                                                                                                                                                                     |

## ImportTransactions_ImportReceipts

The /receipts endpoint is used to store each customers purchase and returns in Engage. All fields in the data model can be used for segmentation and analysis in Engage. If you want to send out transactional emails, use the /orders endpoint instead. ### Identification To be able to store a receipt in Voyado, you need to connect it to a specific contact. In the example payload below the contact type is ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œMemberÃƒÂ¢Ã¢â€šÂ¬Ã‚Â and the key type is ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œemailÃƒÂ¢Ã¢â€šÂ¬Ã‚Â The key has to be a unique data field for the specific contact type, normally one of these fields: - contactId - email - mobilePhone - memberNumber - externalId - socialSecurityNumber (personal identity number - only Swedish or Finnish)

- HTTP Method: `POST`
- Endpoint: `/api/v2/receipts`

**Parameters**

| Name | Type                            | Required | Description       |
| :--- | :------------------------------ | :------- | :---------------- |
| body | [Receipt](../models/Receipt.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import {
  Receipt,
  ReceiptContact,
  ReceiptExtraDataItem,
  ReceiptItem,
  ReceiptPaymentMethod,
  ReceiptTaxDetail,
  ReceiptUsedBonusCheck,
  ReceiptUsedPromotion,
  VoyadoEngage,
} from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const receiptContactMatchKeyType = ReceiptContactMatchKeyType.Email;

  const receiptContact: ReceiptContact = {
    matchKey: 'matchKey',
    matchKeyType: receiptContactMatchKeyType,
    contactType: 'contactType',
  };

  const receiptTaxDetail: ReceiptTaxDetail = {
    description: 'description',
    value: 0.12,
    percent: 0.58,
    totalIncludingTax: 7.54,
    totalExcludingTax: 4.76,
  };

  const receiptExtraDataItem: ReceiptExtraDataItem = {
    name: 'name',
    value: 'value',
  };

  const receiptPaymentMethod: ReceiptPaymentMethod = {
    type: 'type',
    description: 'description',
    value: 6.53,
    extraData: [receiptExtraDataItem],
  };

  const receiptItemType = ReceiptItemType.PURCHASE;

  const receiptItemDiscount: ReceiptItemDiscount = {
    value: 1.64,
    type: 'type',
    description: 'description',
  };

  const receiptItem: ReceiptItem = {
    type: receiptItemType,
    sku: 'sku',
    quantity: 9,
    packQuantity: 6.06,
    grossPaidPrice: 3.82,
    taxAmount: 7.66,
    taxPercent: 1.79,
    extraData: [receiptExtraDataItem],
    articleNumber: 'articleNumber',
    articleName: 'articleName',
    articleGroup: 'articleGroup',
    marginPercent: 2.33,
    awardsBonus: true,
    discounts: [receiptItemDiscount],
  };

  const receiptUsedBonusCheck: ReceiptUsedBonusCheck = {
    checkNumber: 'checkNumber',
  };

  const receiptUsedPromotion: ReceiptUsedPromotion = {
    promotionId: 'promotionId',
    couponId: 'couponId',
  };

  const receiptExtraDataItem: ReceiptExtraDataItem = {
    name: 'name',
    value: 'value',
  };

  const input: Receipt = {
    contact: receiptContact,
    uniqueReceiptId: 'uniqueReceiptId',
    receiptNumber: 'receiptNumber',
    createdDate: 'createdDate',
    storeExternalId: 'storeExternalId',
    currency: 'currency',
    exchangeRateToGroupCurrency: 6.76,
    totalGrossPrice: 5.47,
    taxDetails: [receiptTaxDetail],
    paymentMethods: [receiptPaymentMethod],
    items: [receiptItem],
    usedBonusChecks: [receiptUsedBonusCheck],
    usedPromotions: [receiptUsedPromotion],
    extraData: [receiptExtraDataItem],
  };

  const { data } = await voyadoEngage.transactions.importTransactionsImportReceipts(input);

  console.log(data);
})();
```

## ImportTransactions_Import

Required on **receipt**: externalId (Unique receipt id), invoiceNumber, customerKey, customerKeyType, invoiceCreatedDate, InvoiceModifiedDate, StoreName, StoreNumber Required on **transaction**: externalId (Unique transaction id), articleNr, quantity, price and type (RETURN/DISCOUNT/PURCHASE) Note! It's recommended to include Sku, as it's a required attribute when enriching purchase data from article data.

- HTTP Method: `POST`
- Endpoint: `/api/v2/transactions`

**Parameters**

| Name | Type                                                              | Required | Description       |
| :--- | :---------------------------------------------------------------- | :------- | :---------------- |
| body | [ImportTransactionsObject](../models/ImportTransactionsObject.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ImportTransactionsObject, VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const input: ImportTransactionsObject = {
    receipts: {},
  };

  const { data } = await voyadoEngage.transactions.importTransactionsImport(input);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
