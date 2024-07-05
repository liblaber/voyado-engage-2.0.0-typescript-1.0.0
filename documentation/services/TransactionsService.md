# TransactionsService

A list of all methods in the `TransactionsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                 | Description                                                                            |
| :---------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| [ImportTransactions_ImportReceipts](#importtransactions_importreceipts) | The /receipts endpoint is used to store each customers purchase and returns in Engage. |

&nbsp;All fields in the data model can be used for segmentation and analysis in Engage.
&nbsp;If you want to send out transactional emails, use the /orders endpoint instead.
&nbsp;
&nbsp;### Identification
&nbsp;
&nbsp;To be able to store a receipt in Voyado, you need to connect it to a specific
&nbsp;contact.
&nbsp;
&nbsp;In the example payload below the contact type is “Member” and the key type is “email”
&nbsp;The key has to be a unique data field for the specific contact type,
&nbsp;normally one of these fields:
&nbsp;- contactId
&nbsp;- email
&nbsp;- mobilePhone
&nbsp;- memberNumber
&nbsp;- externalId
&nbsp;- socialSecurityNumber (personal identity number - only Swedish or Finnish) |
|[ImportTransactions_Import](#importtransactions_import)| Required on **receipt**:
&nbsp;externalId (Unique receipt id), invoiceNumber, customerKey,
&nbsp;customerKeyType, invoiceCreatedDate, InvoiceModifiedDate, StoreName, StoreNumber
&nbsp;
&nbsp;Required on **transaction**:
&nbsp;externalId (Unique transaction id), articleNr, quantity, price and type (RETURN/DISCOUNT/PURCHASE)
&nbsp;Note! It's recommended to include Sku, as it's a required
&nbsp;attribute when enriching purchase data from article data. |

## ImportTransactions_ImportReceipts

The /receipts endpoint is used to store each customers purchase and returns in Engage.
&nbsp;All fields in the data model can be used for segmentation and analysis in Engage.
&nbsp;If you want to send out transactional emails, use the /orders endpoint instead.
&nbsp;
&nbsp;### Identification
&nbsp;
&nbsp;To be able to store a receipt in Voyado, you need to connect it to a specific
&nbsp;contact.
&nbsp;
&nbsp;In the example payload below the contact type is “Member” and the key type is “email”
&nbsp;The key has to be a unique data field for the specific contact type,
&nbsp;normally one of these fields:
&nbsp;- contactId
&nbsp;- email
&nbsp;- mobilePhone
&nbsp;- memberNumber
&nbsp;- externalId
&nbsp;- socialSecurityNumber (personal identity number - only Swedish or Finnish)

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
    value: 1.89,
    percent: 9.91,
    totalIncludingTax: 9.84,
    totalExcludingTax: 8.88,
  };

  const receiptExtraDataItem: ReceiptExtraDataItem = {
    name: 'name',
    value: 'value',
  };

  const receiptPaymentMethod: ReceiptPaymentMethod = {
    type_: 'type',
    description: 'description',
    value: 5.08,
    extraData: [receiptExtraDataItem],
  };

  const receiptItemType = ReceiptItemType.PURCHASE;

  const receiptItemDiscount: ReceiptItemDiscount = {
    value: 9.91,
    type_: 'type',
    description: 'description',
  };

  const receiptItem: ReceiptItem = {
    type_: receiptItemType,
    sku: 'sku',
    quantity: 1,
    packQuantity: 8.92,
    grossPaidPrice: 1.17,
    taxAmount: 4.39,
    taxPercent: 1.12,
    extraData: [receiptExtraDataItem],
    articleNumber: 'articleNumber',
    articleName: 'articleName',
    articleGroup: 'articleGroup',
    marginPercent: 6.91,
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
    exchangeRateToGroupCurrency: 8.94,
    totalGrossPrice: 7.19,
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

Required on **receipt**:
&nbsp;externalId (Unique receipt id), invoiceNumber, customerKey,
&nbsp;customerKeyType, invoiceCreatedDate, InvoiceModifiedDate, StoreName, StoreNumber
&nbsp;
&nbsp;Required on **transaction**:
&nbsp;externalId (Unique transaction id), articleNr, quantity, price and type (RETURN/DISCOUNT/PURCHASE)
&nbsp;Note! It's recommended to include Sku, as it's a required
&nbsp;attribute when enriching purchase data from article data.

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
