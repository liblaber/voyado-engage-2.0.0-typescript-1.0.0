# OrderItem

**Properties**

| Name                  | Type                | Required | Description |
| :-------------------- | :------------------ | :------- | :---------- |
| type                  | OrderItemType       | ✅       |             |
| sku                   | string              | ✅       |             |
| quantity              | number              | ✅       |             |
| grossPaidPrice        | number              | ✅       |             |
| description           | string              | ✅       |             |
| grossPaidPricePerUnit | number              | ❌       |             |
| taxAmount             | number              | ❌       |             |
| taxPercent            | number              | ❌       |             |
| imageUrl              | string              | ❌       |             |
| targetUrl             | string              | ❌       |             |
| extraData             | any                 | ❌       |             |
| totalDiscount         | number              | ❌       |             |
| originalPrice         | number              | ❌       |             |
| originalPricePerUnit  | number              | ❌       |             |
| discounts             | OrderItemDiscount[] | ❌       |             |
| discounted            | boolean             | ❌       |             |

# OrderItemType

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| PURCHASE | string | ✅       | "PURCHASE"  |
| RETURN   | string | ✅       | "RETURN"    |
