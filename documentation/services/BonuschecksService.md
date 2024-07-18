# BonuschecksService

A list of all methods in the `BonuschecksService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                       | Description                                                                                                                                                            |
| :-------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [BonusChecks_GetBonusChecksForContact](#bonuschecks_getbonuschecksforcontact)                 | Get all bonus checks for a contact. Expired, redeemed and available. The result can be paginated, using the offset and count query parameters.                         |
| [BonusChecks_GetRedeemedBonusChecksForContact](#bonuschecks_getredeemedbonuschecksforcontact) | Get redeemed bonus checks for a contact. The result can be paginated, using the offset and count query parameters.                                                     |
| [BonusChecks_GetAvailableBonusChecks](#bonuschecks_getavailablebonuschecks)                   | Get available bonus checks for a contact. Expired and redeemed bonus checks are excluded The result can be paginated, using the _offset_ and _count_ query parameters. |
| [BonusChecks_RedeemBonusCheck](#bonuschecks_redeembonuscheck)                                 | Redeem a bonus check for a certain contact.                                                                                                                            |

## BonusChecks_GetBonusChecksForContact

Get all bonus checks for a contact. Expired, redeemed and available. The result can be paginated, using the offset and count query parameters.

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/{contactId}/bonuschecks`

**Parameters**

| Name      | Type   | Required | Description                                              |
| :-------- | :----- | :------- | :------------------------------------------------------- |
| contactId | string | ✅       | Contact identifier (GUID).                               |
| offset    | number | ❌       | The first item to retrieve. (Default value 0)            |
| count     | number | ❌       | The max number of items to retrieve. (Default value 100) |

**Return Type**

`PagedResultOfAllBonusCheckModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.bonuschecks.bonusChecksGetBonusChecksForContact('contactId', {
    offset: 2,
    count: 7,
  });

  console.log(data);
})();
```

## BonusChecks_GetRedeemedBonusChecksForContact

Get redeemed bonus checks for a contact. The result can be paginated, using the offset and count query parameters.

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/{contactId}/bonuschecks/redeemed`

**Parameters**

| Name      | Type   | Required | Description                                              |
| :-------- | :----- | :------- | :------------------------------------------------------- |
| contactId | string | ✅       | Contact identifier (GUID).                               |
| offset    | number | ❌       | The first item to retrieve. (Default value 0)            |
| count     | number | ❌       | The max number of items to retrieve. (Default value 100) |

**Return Type**

`PagedResultOfRedeemedBonusCheckModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.bonuschecks.bonusChecksGetRedeemedBonusChecksForContact('contactId', {
    offset: 6,
    count: 3,
  });

  console.log(data);
})();
```

## BonusChecks_GetAvailableBonusChecks

Get available bonus checks for a contact. Expired and redeemed bonus checks are excluded The result can be paginated, using the _offset_ and _count_ query parameters.

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/{contactId}/bonuschecks/available`

**Parameters**

| Name      | Type   | Required | Description                                      |
| :-------- | :----- | :------- | :----------------------------------------------- |
| contactId | string | ✅       | Contact identifier (GUID).                       |
| offset    | number | ❌       | Number of items to skip. (Default value 0)       |
| count     | number | ❌       | Max number of items to take. (Default value 100) |

**Return Type**

`PagedResultOfAvailableBonusCheckModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.bonuschecks.bonusChecksGetAvailableBonusChecks('contactId', {
    offset: 8,
    count: 9,
  });

  console.log(data);
})();
```

## BonusChecks_RedeemBonusCheck

Redeem a bonus check for a certain contact.

- HTTP Method: `POST`
- Endpoint: `/api/v2/contacts/{contactId}/bonuschecks/{bonusCheckId}/redeem`

**Parameters**

| Name         | Type   | Required | Description                |
| :----------- | :----- | :------- | :------------------------- |
| contactId    | string | ✅       | Contact identifier (GUID). |
| bonusCheckId | string | ✅       | Bonus check identifier.    |

**Return Type**

`RedeemedBonusCheckModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.bonuschecks.bonusChecksRedeemBonusCheck('contactId', 'bonusCheckId');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
