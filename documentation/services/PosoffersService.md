# PosoffersService

A list of all methods in the `PosoffersService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                                 | Description                                                                                                                                                                                                                                                                         |
| :------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [PosOffer_GetAllPosOffersByKey](#posoffer_getallposoffersbykey)                                         | Get all POS offers for a contact. Expired, redeemed and available. Finds the contact by using a key value other than Contact Id. This can only be used for contact types with exactly ONE key. The contact key attribute is configured for each Voyado instance.                    |
| [PosOffer_GetAvailablePosOffersByKey](#posoffer_getavailableposoffersbykey)                             | Get all available POS offers for a contact. Expired and redeemed offers are excluded. Finds the contact by using a key value other than Contact Id. This can only be used for contact types with exactly ONE key. The contact key attribute is configured for each Voyado instance. |
| [PosOffer_GetAllPosOffersByContactTypeAndKey](#posoffer_getallposoffersbycontacttypeandkey)             | Get all POS offers for a contact. Expired, redeemed and available. Finds the contact by using a key value other than Contact Id. This can only be used for contact types with exactly ONE key. The contact key attribute is configured for each Voyado instance.                    |
| [PosOffer_GetAvailablePosOffersByContactTypeAndKey](#posoffer_getavailableposoffersbycontacttypeandkey) | Get all available POS offers for a contact. Expired and redeemed offers are excluded. Finds the contact by using a key value other than Contact Id. This can only be used for contact types with exactly ONE key. The contact key attribute is configured for each Voyado instance. |
| [PosOffer_GetAllPosOffersForContact](#posoffer_getallposoffersforcontact)                               | Get all POS offers for a contact. Expired, redeemed and available. The result can be paginated, using the offset and count query parameters. Note: _expiresOn_ is obsolete and is always **null**                                                                                   |
| [PosOffer_GetAvailablePosOffersForContact](#posoffer_getavailableposoffersforcontact)                   | Get all available POS offers for a contact. Expired and redeemed offers are excluded. The result can be paginated, using the offset and count query parameters.                                                                                                                     |
| [PosOffer_Redeem](#posoffer_redeem)                                                                     | Redeems a POS offer for a Contact using the internal Contact Id                                                                                                                                                                                                                     |
| [PosOffer_RedeemByKey](#posoffer_redeembykey)                                                           | Redeems a POS offer for a Contact using the key for the contact type Finds the contact by using a key value other than Contact Id. This can only be used for contact types with exactly ONE key. The contact key attribute is configured for each Voyado instance.                  |
| [PosOffer_RedeemByContactTypeAndKey](#posoffer_redeembycontacttypeandkey)                               | Redeems a POS offer for a Contact using the key for the contact type Finds the contact by using a key value other than Contact Id. This can only be used for contact types with exactly ONE key. The contact key attribute is configured for each Voyado instance.                  |

## PosOffer_GetAllPosOffersByKey

Get all POS offers for a contact. Expired, redeemed and available. Finds the contact by using a key value other than Contact Id. This can only be used for contact types with exactly ONE key. The contact key attribute is configured for each Voyado instance.

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/bykey/{keyValue}/posoffers/all`

**Parameters**

| Name     | Type   | Required | Description                                                      |
| :------- | :----- | :------- | :--------------------------------------------------------------- |
| keyValue | string | ✅       | Key value, e.g. ssn, externalId, memberNumber, phone number etc. |

**Return Type**

`PagedResultOfAllLoyaltyBarClaimModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.posoffers.posOfferGetAllPosOffersByKey('keyValue');

  console.log(data);
})();
```

## PosOffer_GetAvailablePosOffersByKey

Get all available POS offers for a contact. Expired and redeemed offers are excluded. Finds the contact by using a key value other than Contact Id. This can only be used for contact types with exactly ONE key. The contact key attribute is configured for each Voyado instance.

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/bykey/{keyValue}/posoffers/available`

**Parameters**

| Name     | Type   | Required | Description                                                      |
| :------- | :----- | :------- | :--------------------------------------------------------------- |
| keyValue | string | ✅       | Key value, e.g. ssn, externalId, memberNumber, phone number etc. |

**Return Type**

`PagedResultOfAvailableLoyaltyBarClaimModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.posoffers.posOfferGetAvailablePosOffersByKey('keyValue');

  console.log(data);
})();
```

## PosOffer_GetAllPosOffersByContactTypeAndKey

Get all POS offers for a contact. Expired, redeemed and available. Finds the contact by using a key value other than Contact Id. This can only be used for contact types with exactly ONE key. The contact key attribute is configured for each Voyado instance.

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/{contactType}/bykey/{keyValue}/posoffers/all`

**Parameters**

| Name        | Type   | Required | Description                                                      |
| :---------- | :----- | :------- | :--------------------------------------------------------------- |
| keyValue    | string | ✅       | Key value, e.g. ssn, externalId, memberNumber, phone number etc. |
| contactType | string | ✅       | Contact type, e.g. "member".                                     |

**Return Type**

`PagedResultOfAllLoyaltyBarClaimModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.posoffers.posOfferGetAllPosOffersByContactTypeAndKey('keyValue', 'contactType');

  console.log(data);
})();
```

## PosOffer_GetAvailablePosOffersByContactTypeAndKey

Get all available POS offers for a contact. Expired and redeemed offers are excluded. Finds the contact by using a key value other than Contact Id. This can only be used for contact types with exactly ONE key. The contact key attribute is configured for each Voyado instance.

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/{contactType}/bykey/{keyValue}/posoffers/available`

**Parameters**

| Name        | Type   | Required | Description                                                      |
| :---------- | :----- | :------- | :--------------------------------------------------------------- |
| keyValue    | string | ✅       | Key value, e.g. ssn, externalId, memberNumber, phone number etc. |
| contactType | string | ✅       | Contact type, e.g. "member".                                     |

**Return Type**

`PagedResultOfAvailableLoyaltyBarClaimModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.posoffers.posOfferGetAvailablePosOffersByContactTypeAndKey(
    'keyValue',
    'contactType',
  );

  console.log(data);
})();
```

## PosOffer_GetAllPosOffersForContact

Get all POS offers for a contact. Expired, redeemed and available. The result can be paginated, using the offset and count query parameters. Note: _expiresOn_ is obsolete and is always **null**

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/{contactId}/posoffers/all`

**Parameters**

| Name      | Type   | Required | Description                                              |
| :-------- | :----- | :------- | :------------------------------------------------------- |
| contactId | string | ✅       | Contact identifier (GUID).                               |
| offset    | number | ❌       | The first item to retrieve. (Default value 0)            |
| count     | number | ❌       | The max number of items to retrieve. (Default value 100) |

**Return Type**

`PagedResultOfAllLoyaltyBarClaimModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.posoffers.posOfferGetAllPosOffersForContact('contactId', {
    offset: 9,
    count: 10,
  });

  console.log(data);
})();
```

## PosOffer_GetAvailablePosOffersForContact

Get all available POS offers for a contact. Expired and redeemed offers are excluded. The result can be paginated, using the offset and count query parameters.

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/{contactId}/posoffers/available`

**Parameters**

| Name      | Type   | Required | Description                                              |
| :-------- | :----- | :------- | :------------------------------------------------------- |
| contactId | string | ✅       | Contact identifier (GUID).                               |
| offset    | number | ❌       | The first item to retrieve. (Default value 0)            |
| count     | number | ❌       | The max number of items to retrieve. (Default value 100) |

**Return Type**

`PagedResultOfAvailableLoyaltyBarClaimModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.posoffers.posOfferGetAvailablePosOffersForContact('contactId', {
    offset: 1,
    count: 123,
  });

  console.log(data);
})();
```

## PosOffer_Redeem

Redeems a POS offer for a Contact using the internal Contact Id

- HTTP Method: `POST`
- Endpoint: `/api/v2/contacts/{contactId}/posoffers/{id}/redeem`

**Parameters**

| Name      | Type   | Required | Description                                   |
| :-------- | :----- | :------- | :-------------------------------------------- |
| id        | string | ✅       | The id returned from the get operation (GUID) |
| contactId | string | ✅       | Contact identifier (GUID).                    |

**Return Type**

`RedeemedLoyaltyBarClaimModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.posoffers.posOfferRedeem('id', 'contactId');

  console.log(data);
})();
```

## PosOffer_RedeemByKey

Redeems a POS offer for a Contact using the key for the contact type Finds the contact by using a key value other than Contact Id. This can only be used for contact types with exactly ONE key. The contact key attribute is configured for each Voyado instance.

- HTTP Method: `POST`
- Endpoint: `/api/v2/contacts/bykey/{keyValue}/posoffers/{id}/redeem`

**Parameters**

| Name     | Type   | Required | Description                                                      |
| :------- | :----- | :------- | :--------------------------------------------------------------- |
| id       | string | ✅       | The id returned from the get operation (GUID)                    |
| keyValue | string | ✅       | Key value, e.g. ssn, externalId, memberNumber, phone number etc. |

**Return Type**

`RedeemedLoyaltyBarClaimModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.posoffers.posOfferRedeemByKey('id', 'keyValue');

  console.log(data);
})();
```

## PosOffer_RedeemByContactTypeAndKey

Redeems a POS offer for a Contact using the key for the contact type Finds the contact by using a key value other than Contact Id. This can only be used for contact types with exactly ONE key. The contact key attribute is configured for each Voyado instance.

- HTTP Method: `POST`
- Endpoint: `/api/v2/contacts/{contactType}/bykey/{keyValue}/posoffers/{id}/redeem`

**Parameters**

| Name        | Type   | Required | Description                                                      |
| :---------- | :----- | :------- | :--------------------------------------------------------------- |
| id          | string | ✅       | The id returned from the get operation (GUID)                    |
| keyValue    | string | ✅       | Key value, e.g. ssn, externalId, memberNumber, phone number etc. |
| contactType | string | ✅       | Contact type, e.g. "member" or "contact".                        |

**Return Type**

`RedeemedLoyaltyBarClaimModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.posoffers.posOfferRedeemByContactTypeAndKey('id', 'keyValue', 'contactType');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
