# Receipt

**Properties**

| Name                        | Type                    | Required | Description |
| :-------------------------- | :---------------------- | :------- | :---------- |
| contact                     | ReceiptContact          | ✅       |             |
| uniqueReceiptId             | string                  | ✅       |             |
| receiptNumber               | string                  | ✅       |             |
| createdDate                 | string                  | ✅       |             |
| storeExternalId             | string                  | ✅       |             |
| currency                    | string                  | ✅       |             |
| totalGrossPrice             | number                  | ✅       |             |
| paymentMethods              | ReceiptPaymentMethod[]  | ✅       |             |
| items                       | ReceiptItem[]           | ✅       |             |
| exchangeRateToGroupCurrency | number                  | ❌       |             |
| taxDetails                  | ReceiptTaxDetail[]      | ❌       |             |
| usedBonusChecks             | ReceiptUsedBonusCheck[] | ❌       |             |
| usedPromotions              | ReceiptUsedPromotion[]  | ❌       |             |
| extraData                   | ReceiptExtraDataItem[]  | ❌       |             |
