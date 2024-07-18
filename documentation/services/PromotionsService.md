# PromotionsService

A list of all methods in the `PromotionsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                           | Description                                                                                                                                         |
| :------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| [MultichannelPromotions_GetById](#multichannelpromotions_getbyid)                                 | Gets the multichannel promotion with the identifier which is set by Voyado                                                                          |
| [MultichannelPromotions_Update](#multichannelpromotions_update)                                   | Updates an existing multichannel promotion. Only multichannel promotion in status 'Draft' can be updated.                                           |
| [MultichannelPromotions_DeleteById](#multichannelpromotions_deletebyid)                           | Only unassigned multichannel promotions can be deleted                                                                                              |
| [MultichannelPromotions_GetValidityById](#multichannelpromotions_getvaliditybyid)                 | Gets the multichannel promotion with the identifier which is an internal reference for Voyado                                                       |
| [MultichannelPromotions_UpdateValidity](#multichannelpromotions_updatevalidity)                   | Updates duration of an existing multichannel promotion. Only multichannel promotion in status 'Draft' can be updated.                               |
| [MultichannelPromotions_GetByExternalId](#multichannelpromotions_getbyexternalid)                 | Gets the multichannel promotion with the identifier which is an external reference for Voyado                                                       |
| [MultichannelPromotions_Create](#multichannelpromotions_create)                                   | Only creates multichannel promotion in status 'Draft'.                                                                                              |
| [MultichannelPromotions_DeleteByExternalId](#multichannelpromotions_deletebyexternalid)           | Only unassigned multichannel promotions can be deleted                                                                                              |
| [MultichannelPromotions_GetByValidityExternalId](#multichannelpromotions_getbyvalidityexternalid) | Gets the multichannel promotion validity with the identifier which is an external reference for Voyado                                              |
| [OfferPromotions_RedeemByPromotionId](#offerpromotions_redeembypromotionid)                       | Redeem a promotion (multichannel offer or mobile swipe) for a Contact using the internal promotion Id Redemption channel can be POS, ECOM or OTHER. |
| [OfferPromotions_ReactivatePromotionCode](#offerpromotions_reactivatepromotioncode)               | Reactivate a redeemed reward voucher                                                                                                                |

## MultichannelPromotions_GetById

Gets the multichannel promotion with the identifier which is set by Voyado

- HTTP Method: `GET`
- Endpoint: `/api/v2/promotions/multichannels/{id}`

**Parameters**

| Name | Type   | Required | Description                      |
| :--- | :----- | :------- | :------------------------------- |
| id   | string | ✅       | Promotion identifier from Voyado |

**Return Type**

`MultichannelPromotionModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.promotions.multichannelPromotionsGetById('id');

  console.log(data);
})();
```

## MultichannelPromotions_Update

Updates an existing multichannel promotion. Only multichannel promotion in status 'Draft' can be updated.

- HTTP Method: `PUT`
- Endpoint: `/api/v2/promotions/multichannels/{id}`

**Parameters**

| Name | Type                                                                  | Required | Description                              |
| :--- | :-------------------------------------------------------------------- | :------- | :--------------------------------------- |
| body | [MultichannelPromotionModel](../models/MultichannelPromotionModel.md) | ✅       | The request body.                        |
| id   | string                                                                | ✅       | Voyado multichannel promotion identifier |

**Return Type**

`MultichannelPromotionModel`

**Example Usage Code Snippet**

```typescript
import {
  MultichannelPromotionModel,
  MultichannelPromotionRedemptionChannelModel,
  PromotionBasicPresentationModel,
  PromotionValidityModel,
  VoyadoEngage,
} from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const multichannelPromotionModelStatus = MultichannelPromotionModelStatus.Ended;

  const unit = Unit.Months;

  const assignDateRange: AssignDateRange = {
    unit: unit,
    amount: 1231786213,
  };

  const promotionValidityModel: PromotionValidityModel = {
    startDate: 'startDate',
    endDate: 'endDate',
    assignedValidity: assignDateRange,
  };

  const promotionBasicPresentationModel: PromotionBasicPresentationModel = {
    heading: 'heading',
    description: 'description',
    link: 'link',
  };

  const multichannelPromotionRedemptionChannelModelType = MultichannelPromotionRedemptionChannelModelType.POS;

  const multichannelPromotionRedemptionChannelModelValueType =
    MultichannelPromotionRedemptionChannelModelValueType.PERCENT;

  const multichannelPromotionRedemptionChannelModel: MultichannelPromotionRedemptionChannelModel = {
    type: multichannelPromotionRedemptionChannelModelType,
    valueType: multichannelPromotionRedemptionChannelModelValueType,
    value: 'value',
    localValues: [{}],
    instruction: 'instruction',
  };

  const input: MultichannelPromotionModel = {
    id: '00000000-0000-0000-0000-000000000000',
    status: multichannelPromotionModelStatus,
    externalId: 'externalId',
    name: 'name',
    validity: promotionValidityModel,
    presentation: promotionBasicPresentationModel,
    redemptionChannels: [multichannelPromotionRedemptionChannelModel],
  };

  const { data } = await voyadoEngage.promotions.multichannelPromotionsUpdate('id', input);

  console.log(data);
})();
```

## MultichannelPromotions_DeleteById

Only unassigned multichannel promotions can be deleted

- HTTP Method: `DELETE`
- Endpoint: `/api/v2/promotions/multichannels/{id}`

**Parameters**

| Name | Type   | Required | Description                                   |
| :--- | :----- | :------- | :-------------------------------------------- |
| id   | string | ✅       | Voyado identifier to a multichannel promotion |

**Return Type**

`StatusCodeResult`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.promotions.multichannelPromotionsDeleteById('id');

  console.log(data);
})();
```

## MultichannelPromotions_GetValidityById

Gets the multichannel promotion with the identifier which is an internal reference for Voyado

- HTTP Method: `GET`
- Endpoint: `/api/v2/promotions/multichannels/{id}/validity`

**Parameters**

| Name | Type   | Required | Description                 |
| :--- | :----- | :------- | :-------------------------- |
| id   | string | ✅       | Identifier inside of Voyado |

**Return Type**

`PromotionValidityModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.promotions.multichannelPromotionsGetValidityById('id');

  console.log(data);
})();
```

## MultichannelPromotions_UpdateValidity

Updates duration of an existing multichannel promotion. Only multichannel promotion in status 'Draft' can be updated.

- HTTP Method: `PUT`
- Endpoint: `/api/v2/promotions/multichannels/{id}/validity`

**Parameters**

| Name | Type                                                          | Required | Description                              |
| :--- | :------------------------------------------------------------ | :------- | :--------------------------------------- |
| body | [PromotionValidityModel](../models/PromotionValidityModel.md) | ✅       | The request body.                        |
| id   | string                                                        | ✅       | Voyado multichannel promotion identifier |

**Return Type**

`MultichannelPromotionModel`

**Example Usage Code Snippet**

```typescript
import { AssignDateRange, PromotionValidityModel, VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const unit = Unit.Months;

  const assignDateRange: AssignDateRange = {
    unit: unit,
    amount: 1231786213,
  };

  const input: PromotionValidityModel = {
    startDate: 'startDate',
    endDate: 'endDate',
    assignedValidity: assignDateRange,
  };

  const { data } = await voyadoEngage.promotions.multichannelPromotionsUpdateValidity('id', input);

  console.log(data);
})();
```

## MultichannelPromotions_GetByExternalId

Gets the multichannel promotion with the identifier which is an external reference for Voyado

- HTTP Method: `GET`
- Endpoint: `/api/v2/promotions/multichannels`

**Parameters**

| Name       | Type   | Required | Description                           |
| :--------- | :----- | :------- | :------------------------------------ |
| externalId | string | ✅       | External identifier outside of Voyado |

**Return Type**

`MultichannelPromotionModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.promotions.multichannelPromotionsGetByExternalId({
    externalId: 'externalId',
  });

  console.log(data);
})();
```

## MultichannelPromotions_Create

Only creates multichannel promotion in status 'Draft'.

- HTTP Method: `POST`
- Endpoint: `/api/v2/promotions/multichannels`

**Parameters**

| Name | Type                                                                          | Required | Description       |
| :--- | :---------------------------------------------------------------------------- | :------- | :---------------- |
| body | [MultichannelBasePromotionModel](../models/MultichannelBasePromotionModel.md) | ✅       | The request body. |

**Return Type**

`MultichannelPromotionModel`

**Example Usage Code Snippet**

```typescript
import {
  MultichannelBasePromotionModel,
  MultichannelPromotionRedemptionChannelModel,
  PromotionBasicPresentationModel,
  PromotionValidityModel,
  VoyadoEngage,
} from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const unit = Unit.Months;

  const assignDateRange: AssignDateRange = {
    unit: unit,
    amount: 1231786213,
  };

  const promotionValidityModel: PromotionValidityModel = {
    startDate: 'startDate',
    endDate: 'endDate',
    assignedValidity: assignDateRange,
  };

  const promotionBasicPresentationModel: PromotionBasicPresentationModel = {
    heading: 'heading',
    description: 'description',
    link: 'link',
  };

  const multichannelPromotionRedemptionChannelModelType = MultichannelPromotionRedemptionChannelModelType.POS;

  const multichannelPromotionRedemptionChannelModelValueType =
    MultichannelPromotionRedemptionChannelModelValueType.PERCENT;

  const multichannelPromotionRedemptionChannelModel: MultichannelPromotionRedemptionChannelModel = {
    type: multichannelPromotionRedemptionChannelModelType,
    valueType: multichannelPromotionRedemptionChannelModelValueType,
    value: 'value',
    localValues: [{}],
    instruction: 'instruction',
  };

  const input: MultichannelBasePromotionModel = {
    externalId: 'externalId',
    name: 'name',
    validity: promotionValidityModel,
    presentation: promotionBasicPresentationModel,
    redemptionChannels: [multichannelPromotionRedemptionChannelModel],
  };

  const { data } = await voyadoEngage.promotions.multichannelPromotionsCreate(input);

  console.log(data);
})();
```

## MultichannelPromotions_DeleteByExternalId

Only unassigned multichannel promotions can be deleted

- HTTP Method: `DELETE`
- Endpoint: `/api/v2/promotions/multichannels`

**Parameters**

| Name       | Type   | Required | Description                                     |
| :--------- | :----- | :------- | :---------------------------------------------- |
| externalId | string | ✅       | External identifier to a multichannel promotion |

**Return Type**

`StatusCodeResult`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.promotions.multichannelPromotionsDeleteByExternalId({
    externalId: 'externalId',
  });

  console.log(data);
})();
```

## MultichannelPromotions_GetByValidityExternalId

Gets the multichannel promotion validity with the identifier which is an external reference for Voyado

- HTTP Method: `GET`
- Endpoint: `/api/v2/promotions/multichannels/validity`

**Parameters**

| Name       | Type   | Required | Description                           |
| :--------- | :----- | :------- | :------------------------------------ |
| externalId | string | ✅       | External identifier outside of Voyado |

**Return Type**

`PromotionValidityModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.promotions.multichannelPromotionsGetByValidityExternalId({
    externalId: 'externalId',
  });

  console.log(data);
})();
```

## OfferPromotions_RedeemByPromotionId

Redeem a promotion (multichannel offer or mobile swipe) for a Contact using the internal promotion Id Redemption channel can be POS, ECOM or OTHER.

- HTTP Method: `POST`
- Endpoint: `/api/v2/promotions/codes/{promotionId}/redeem`

**Parameters**

| Name        | Type                                            | Required | Description             |
| :---------- | :---------------------------------------------- | :------- | :---------------------- |
| body        | [RedeemBodyModel](../models/RedeemBodyModel.md) | ✅       | The request body.       |
| promotionId | string                                          | ✅       | The id of the promotion |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { RedeemBodyModel, VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const input: RedeemBodyModel = {
    redemptionChannel: 'redemptionChannel',
  };

  const { data } = await voyadoEngage.promotions.offerPromotionsRedeemByPromotionId('promotionId', input);

  console.log(data);
})();
```

## OfferPromotions_ReactivatePromotionCode

Reactivate a redeemed reward voucher

- HTTP Method: `POST`
- Endpoint: `/api/v2/promotions/reward-vouchers/{id}/reactivate`

**Parameters**

| Name | Type   | Required | Description                  |
| :--- | :----- | :------- | :--------------------------- |
| id   | string | ✅       | The id of the reward voucher |

**Return Type**

`string`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.promotions.offerPromotionsReactivatePromotionCode('id');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
