# StoresService

A list of all methods in the `StoresService` service. Click on the method name to view detailed information about that method.

| Methods                                     | Description                                          |
| :------------------------------------------ | :--------------------------------------------------- |
| [StoresV_GetStores](#storesv_getstores)     |                                                      |
| [StoresV_CreateStore](#storesv_createstore) |                                                      |
| [StoresV_GetStore](#storesv_getstore)       |                                                      |
| [StoresV_UpdateStore](#storesv_updatestore) | Updates a store. externalId is the store identifier. |

## StoresV_GetStores

- HTTP Method: `GET`
- Endpoint: `/api/v2/stores`

**Parameters**

| Name            | Type    | Required | Description                                                                                |
| :-------------- | :------ | :------- | :----------------------------------------------------------------------------------------- |
| includeInactive | boolean | ❌       | Value indicating if the inactive stores should be included or not. (Default value = false) |

**Return Type**

`ApiStore[]`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.stores.storesVGetStores({
    includeInactive: true,
  });

  console.log(data);
})();
```

## StoresV_CreateStore

- HTTP Method: `POST`
- Endpoint: `/api/v2/stores`

**Parameters**

| Name | Type                              | Required | Description       |
| :--- | :-------------------------------- | :------- | :---------------- |
| body | [ApiStore](../models/ApiStore.md) | ✅       | The request body. |

**Return Type**

`ApiStore`

**Example Usage Code Snippet**

```typescript
import { ApiStore, VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const input: ApiStore = {
    name: 'name',
    city: 'city',
    countryCode: 'countryCode',
    county: 'county',
    email: 'email',
    adjacentZipCodes: 'adjacentZipCodes',
    emailUnsubscribeText: 'emailUnsubscribeText',
    emailViewOnlineText: 'emailViewOnlineText',
    externalId: 'externalId',
    footerHtml: 'footerHtml',
    headerHtml: 'headerHtml',
    homepage: 'homepage',
    phoneNumber: 'phoneNumber',
    region: 'region',
    senderAddress: 'senderAddress',
    senderName: 'senderName',
    street: 'street',
    type: 'type',
    zipCode: 'zipCode',
    active: true,
    timeZone: 'timeZone',
  };

  const { data } = await voyadoEngage.stores.storesVCreateStore(input);

  console.log(data);
})();
```

## StoresV_GetStore

- HTTP Method: `GET`
- Endpoint: `/api/v2/stores/{externalId}`

**Parameters**

| Name            | Type    | Required | Description                                                                   |
| :-------------- | :------ | :------- | :---------------------------------------------------------------------------- |
| externalId      | string  | ✅       | The external id of the store to get.                                          |
| includeInactive | boolean | ❌       | Value indicating if the store can be inactive or not. (Default value = false) |

**Return Type**

`ApiStore`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.stores.storesVGetStore('externalId', {
    includeInactive: true,
  });

  console.log(data);
})();
```

## StoresV_UpdateStore

Updates a store. externalId is the store identifier.

- HTTP Method: `POST`
- Endpoint: `/api/v2/stores/{externalId}`

**Parameters**

| Name       | Type                              | Required | Description                             |
| :--------- | :-------------------------------- | :------- | :-------------------------------------- |
| body       | [ApiStore](../models/ApiStore.md) | ✅       | The request body.                       |
| externalId | string                            | ✅       | The external id of the store to update. |

**Return Type**

`ApiStore`

**Example Usage Code Snippet**

```typescript
import { ApiStore, VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const input: ApiStore = {
    name: 'name',
    city: 'city',
    countryCode: 'countryCode',
    county: 'county',
    email: 'email',
    adjacentZipCodes: 'adjacentZipCodes',
    emailUnsubscribeText: 'emailUnsubscribeText',
    emailViewOnlineText: 'emailViewOnlineText',
    externalId: 'externalId',
    footerHtml: 'footerHtml',
    headerHtml: 'headerHtml',
    homepage: 'homepage',
    phoneNumber: 'phoneNumber',
    region: 'region',
    senderAddress: 'senderAddress',
    senderName: 'senderName',
    street: 'street',
    type: 'type',
    zipCode: 'zipCode',
    active: true,
    timeZone: 'timeZone',
  };

  const { data } = await voyadoEngage.stores.storesVUpdateStore('externalId', input);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
