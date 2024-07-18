# ContactsService

A list of all methods in the `ContactsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [ContactsV_Count](#contactsv_count)                                                                                       | Get number of approved contacts. This is a cached value that will be updated with a set frequency (normally once every 20 min).                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [ContactsV_GetContactById](#contactsv_getcontactbyid)                                                                     | Get a single contact, using the unique identifier. The dynamic fields of the response object depend on the current instance configuration.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [ContactsV_UpdateContactPost](#contactsv_updatecontactpost)                                                               | Update one or several fields of a single contact. Dont send an empty value unless you want it to be empty.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [ContactsV_DeleteWithHeaderParam](#contactsv_deletewithheaderparam)                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [ContactsV_CountByContactType](#contactsv_countbycontacttype)                                                             | Get number of approved contacts of given type. This is a cached value that will be updated with a set frequency (normally once every 20 min).                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [ContactBulk_GetBulkStatus](#contactbulk_getbulkstatus)                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [ContactsV_GetContactByTypeAndKeyValueInUrlAsync](#contactsv_getcontactbytypeandkeyvalueinurlasync)                       | ! Please be aware that this endpoint is currently usable with either the key value being provided through ! ! the path or a query param. Hence there being two of the same endpoints. ! ! We recommend that you use the query param version (the first) as it is the more versatile one of the two ! Get a single contact of a certain type, using a key value that corresponds to the current instance configuration. This can only be used for contact types with exactly ONE key. The dynamic fields of the response object depend on the current configuration. |
| [ProductRecommendation_GetProductRecommendations](#productrecommendation_getproductrecommendations)                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [ContactRetailKpi_GetPurchaseHistory](#contactretailkpi_getpurchasehistory)                                               | Following summary shows the purchase history for a single contact, over all time, 12 months and 24 months.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [BackInStockSubscription_GetByContactId](#backinstocksubscription_getbycontactid)                                         | Get back in stock subscriptions for a contact                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [ContactsV_GetContactByExternalIdAsync](#contactsv_getcontactbyexternalidasync)                                           | Get a single contact of a certain type, using the contact's external id. The dynamic fields of the response object depend on the current configuration.                                                                                                                                                                                                                                                                                                                                                                                                             |
| [ContactsV_GetContactByTypeAndKeyValueAsync](#contactsv_getcontactbytypeandkeyvalueasync)                                 | Get a single contact of a certain type, using a key value that corresponds to the current instance configuration. This can only be used for contact types with exactly ONE key. The dynamic fields of the response object depend on the current configuration.                                                                                                                                                                                                                                                                                                      |
| [ContactMessage_GetLatestMessagesByContactId](#contactmessage_getlatestmessagesbycontactid)                               | Get the latest messages (max 500) a contact has received                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [Transactions_GetTransactionsByContactId](#transactions_gettransactionsbycontactid)                                       | Get all purchase transactions for a single contact with optional offset and number of transactions in response.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [BonusPointTransactions_GetBonusPointTransactionsForContact](#bonuspointtransactions_getbonuspointtransactionsforcontact) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [ContactsV_GetChangedContactIds](#contactsv_getchangedcontactids)                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [OfferPromotions_GetPromotionsForContact](#offerpromotions_getpromotionsforcontact)                                       | Get available promotions for a contact. To filter on redemptionChannelType add it as a query string ?redemptionChannelType=POS It can be POS, ECOM or OTHER                                                                                                                                                                                                                                                                                                                                                                                                         |
| [ContactOverview_GetContactIdAsync](#contactoverview_getcontactidasync)                                                   | Get the contactId for one (or several) contacts using either: - email - socialSecurityNumber - mobilePhone - customKey (the customKey must be configured by your supplier) - any - the any field can contain email, socialSecurityNumber, mobilePhone or the custom key (and are checked in that order)                                                                                                                                                                                                                                                             |
| [ContactsV_CreateContactHeaderParam](#contactsv_createcontactheaderparam)                                                 | Create a new, approved contact. If the contacts key identifier (example: Email) already exists : returns the GUID of the first entry found.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [ContactsV_PromoteToMember](#contactsv_promotetomember)                                                                   | Promote a contact to a member with one or several required fields.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [ContactBulk_CreateContactsInBulk](#contactbulk_createcontactsinbulk)                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [ContactBulk_UpdateContactsInBulk](#contactbulk_updatecontactsinbulk)                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [ContactPreferences_AcceptsSms](#contactpreferences_acceptssms)                                                           | Update the preference that indicates whether or not a contact accepts to be contacted via sms. This will also approve an unapproved contact. The primary way of updating a contact preference is through the update contacts endpoint.                                                                                                                                                                                                                                                                                                                              |
| [BonusPointTransactions_AdjustRewardPoints](#bonuspointtransactions_adjustrewardpoints)                                   | Adds reward points to a contact.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [ContactPreferences_AcceptsEmail](#contactpreferences_acceptsemail)                                                       | Update the preference that indicates whether or not a contact accepts to be contacted via email. This will also approve an unapproved contact. The primary way of updating a contact preference is through the update contacts endpoint.                                                                                                                                                                                                                                                                                                                            |
| [ContactPreferences_AcceptsPostal](#contactpreferences_acceptspostal)                                                     | Update the preference that indicates whether or not a contact accepts to be contacted via regular mail. This will also approve an unapproved contact. The primary way of updating a contact preference is through the update contacts endpoint.                                                                                                                                                                                                                                                                                                                     |
| [AssignPromotion_Assign](#assignpromotion_assign)                                                                         | Assign a promotion (multichannel offer only) to a Contact using the internal Contact Id and the id of the promotion                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [OfferPromotions_Redeem](#offerpromotions_redeem)                                                                         | Redeem a promotion (multichannel offer or mobile swipe) for a Contact using the internal Contact Id Redemption channel can be POS, ECOM or OTHER.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [ContactMessage_SmsUnsubscribeContact](#contactmessage_smsunsubscribecontact)                                             | Optional messageId input if user wants to unsubscribe on specific message instead of last sent Sms                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [ContactMessage_EmailUnsubscribeContact](#contactmessage_emailunsubscribecontact)                                         | Optional messageId input if user wants to unsubscribe on specific message instead of last sent email                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [ContactsV_UpdateContactType](#contactsv_updatecontacttype)                                                               | Updates the contactType for a contact if all expected contact data is available                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## ContactsV_Count

Get number of approved contacts. This is a cached value that will be updated with a set frequency (normally once every 20 min).

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/count`

**Return Type**

`number`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.contactsVCount();

  console.log(data);
})();
```

## ContactsV_GetContactById

Get a single contact, using the unique identifier. The dynamic fields of the response object depend on the current instance configuration.

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/{contactId}`

**Parameters**

| Name      | Type   | Required | Description                |
| :-------- | :----- | :------- | :------------------------- |
| contactId | string | ✅       | Contact identifier (GUID). |

**Return Type**

`IApiContact`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.contactsVGetContactById('contactId');

  console.log(data);
})();
```

## ContactsV_UpdateContactPost

Update one or several fields of a single contact. Dont send an empty value unless you want it to be empty.

- HTTP Method: `POST`
- Endpoint: `/api/v2/contacts/{contactId}`

**Parameters**

| Name      | Type   | Required | Description                |
| :-------- | :----- | :------- | :------------------------- |
| body      | any    | ✅       | The request body.          |
| contactId | string | ✅       | Contact identifier (GUID). |

**Return Type**

`IApiContact`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.contactsVUpdateContactPost('contactId', input);

  console.log(data);
})();
```

## ContactsV_DeleteWithHeaderParam

- HTTP Method: `DELETE`
- Endpoint: `/api/v2/contacts/{contactId}`

**Parameters**

| Name      | Type   | Required | Description                                       |
| :-------- | :----- | :------- | :------------------------------------------------ |
| contactId | string | ✅       | Contact identifier (GUID).                        |
| source    | string | ❌       | Source system identifier (instance configuration) |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.contactsVDeleteWithHeaderParam('contactId', {
    source: 'source',
  });

  console.log(data);
})();
```

## ContactsV_CountByContactType

Get number of approved contacts of given type. This is a cached value that will be updated with a set frequency (normally once every 20 min).

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/{contactType}/count`

**Parameters**

| Name        | Type   | Required | Description                                     |
| :---------- | :----- | :------- | :---------------------------------------------- |
| contactType | string | ✅       | Id for contact type, e.g. "member" or "contact" |

**Return Type**

`number`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.contactsVCountByContactType('contactType');

  console.log(data);
})();
```

## ContactBulk_GetBulkStatus

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/bulk/status`

**Parameters**

| Name    | Type   | Required | Description                 |
| :------ | :----- | :------- | :-------------------------- |
| batchId | string | ✅       | Id from bulk contact import |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.contactBulkGetBulkStatus({
    batchId: 'batchId',
  });

  console.log(data);
})();
```

## ContactsV_GetContactByTypeAndKeyValueInUrlAsync

! Please be aware that this endpoint is currently usable with either the key value being provided through ! ! the path or a query param. Hence there being two of the same endpoints. ! ! We recommend that you use the query param version (the first) as it is the more versatile one of the two ! Get a single contact of a certain type, using a key value that corresponds to the current instance configuration. This can only be used for contact types with exactly ONE key. The dynamic fields of the response object depend on the current configuration.

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/{contactType}/bykey/{keyValue}`

**Parameters**

| Name        | Type   | Required | Description                            |
| :---------- | :----- | :------- | :------------------------------------- |
| contactType | string | ✅       | Contact type, e.g. "member".           |
| keyValue    | string | ✅       | Key value, e.g. ssn, phone number etc. |

**Return Type**

`IApiContact`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.contactsVGetContactByTypeAndKeyValueInUrlAsync(
    'contactType',
    'keyValue',
  );

  console.log(data);
})();
```

## ProductRecommendation_GetProductRecommendations

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/{contactId}/productrecommendations`

**Parameters**

| Name      | Type   | Required | Description                |
| :-------- | :----- | :------- | :------------------------- |
| contactId | string | ✅       | Contact identifier (GUID). |

**Return Type**

`ProductRecommendationsModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.productRecommendationGetProductRecommendations('contactId');

  console.log(data);
})();
```

## ContactRetailKpi_GetPurchaseHistory

Following summary shows the purchase history for a single contact, over all time, 12 months and 24 months.

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/{contactId}/purchasehistorysummary`

**Parameters**

| Name      | Type   | Required | Description               |
| :-------- | :----- | :------- | :------------------------ |
| contactId | string | ✅       | Contact identifier (GUID) |

**Return Type**

`PurchaseHistorySummary`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.contactRetailKpiGetPurchaseHistory('contactId');

  console.log(data);
})();
```

## BackInStockSubscription_GetByContactId

Get back in stock subscriptions for a contact

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/{contactId}/backinstock/subscriptions`

**Parameters**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| contactId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.backInStockSubscriptionGetByContactId('contactId');

  console.log(data);
})();
```

## ContactsV_GetContactByExternalIdAsync

Get a single contact of a certain type, using the contact's external id. The dynamic fields of the response object depend on the current configuration.

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/{contactType}/byexternalid/{externalId}`

**Parameters**

| Name        | Type   | Required | Description                           |
| :---------- | :----- | :------- | :------------------------------------ |
| contactType | string | ✅       | Contact type, e.g. Member or Contact. |
| externalId  | string | ✅       | External contact id.                  |

**Return Type**

`IApiContact`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.contactsVGetContactByExternalIdAsync('contactType', 'externalId');

  console.log(data);
})();
```

## ContactsV_GetContactByTypeAndKeyValueAsync

Get a single contact of a certain type, using a key value that corresponds to the current instance configuration. This can only be used for contact types with exactly ONE key. The dynamic fields of the response object depend on the current configuration.

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/{contactType}/bykey`

**Parameters**

| Name        | Type   | Required | Description                            |
| :---------- | :----- | :------- | :------------------------------------- |
| contactType | string | ✅       | Contact type, e.g. "member".           |
| keyValue    | string | ✅       | Key value, e.g. ssn, phone number etc. |

**Return Type**

`IApiContact`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.contactsVGetContactByTypeAndKeyValueAsync('contactType', {
    keyValue: 'keyValue',
  });

  console.log(data);
})();
```

## ContactMessage_GetLatestMessagesByContactId

Get the latest messages (max 500) a contact has received

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/{contactId}/messages/latest`

**Parameters**

| Name      | Type   | Required | Description                                                     |
| :-------- | :----- | :------- | :-------------------------------------------------------------- |
| contactId | string | ✅       | Contact identifier (GUID).                                      |
| count     | number | ❌       | Max number of items to take. (Default value 100, Max value 500) |

**Return Type**

`ListResultOfApiMessage`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.contactMessageGetLatestMessagesByContactId('contactId', {
    count: 10,
  });

  console.log(data);
})();
```

## Transactions_GetTransactionsByContactId

Get all purchase transactions for a single contact with optional offset and number of transactions in response.

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/{contactId}/transactions`

**Parameters**

| Name      | Type   | Required | Description                                      |
| :-------- | :----- | :------- | :----------------------------------------------- |
| contactId | string | ✅       | Contact identifier (GUID)                        |
| offset    | number | ❌       | Number of items to skip. (Default value 0)       |
| count     | number | ❌       | Max number of items to take. (Default value 100) |

**Return Type**

`PagedResultOfTransactionItem`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.transactionsGetTransactionsByContactId('contactId', {
    offset: 9,
    count: 10,
  });

  console.log(data);
})();
```

## BonusPointTransactions_GetBonusPointTransactionsForContact

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/{contactId}/bonuspointtransactions`

**Parameters**

| Name      | Type   | Required | Description                                              |
| :-------- | :----- | :------- | :------------------------------------------------------- |
| contactId | string | ✅       | The contact identifier (GUID).                           |
| offset    | number | ❌       | The first item to retrieve. (Default value 0)            |
| count     | number | ❌       | The max number of items to retrieve. (Default value 100) |

**Return Type**

`PagedResultOfBonusPointTransactionModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.bonusPointTransactionsGetBonusPointTransactionsForContact('contactId', {
    offset: 3,
    count: 10,
  });

  console.log(data);
})();
```

## ContactsV_GetChangedContactIds

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/changes`

**Parameters**

| Name       | Type                                  | Required | Description                                         |
| :--------- | :------------------------------------ | :------- | :-------------------------------------------------- |
| changeType | [ChangeType](../models/ChangeType.md) | ✅       | Created, Updated or Deleted                         |
| fromDate   | string                                | ✅       | Start of timespan (ex 2023-05-04 11:20:00.000)      |
| toDate     | string                                | ❌       | End of timespan (Default the current time and date) |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const changeType = ChangeType.Created;

  const { data } = await voyadoEngage.contacts.contactsVGetChangedContactIds({
    changeType: changeType,
    fromDate: 'fromDate',
    toDate: 'toDate',
  });

  console.log(data);
})();
```

## OfferPromotions_GetPromotionsForContact

Get available promotions for a contact. To filter on redemptionChannelType add it as a query string ?redemptionChannelType=POS It can be POS, ECOM or OTHER

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/{contactId}/promotions`

**Parameters**

| Name                  | Type   | Required | Description                                                  |
| :-------------------- | :----- | :------- | :----------------------------------------------------------- |
| contactId             | string | ✅       | Contact identifier                                           |
| redemptionChannelType | string | ❌       | Filter on redemptionChannelType it can be POS, ECOM or OTHER |

**Return Type**

`ApiPromotionModel[]`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.offerPromotionsGetPromotionsForContact('contactId', {
    redemptionChannelType: 'redemptionChannelType',
  });

  console.log(data);
})();
```

## ContactOverview_GetContactIdAsync

Get the contactId for one (or several) contacts using either: - email - socialSecurityNumber - mobilePhone - customKey (the customKey must be configured by your supplier) - any - the any field can contain email, socialSecurityNumber, mobilePhone or the custom key (and are checked in that order)

- HTTP Method: `GET`
- Endpoint: `/api/v2/contacts/id`

**Parameters**

| Name                 | Type   | Required | Description |
| :------------------- | :----- | :------- | :---------- |
| contactType          | string | ❌       |             |
| email                | string | ❌       |             |
| socialSecurityNumber | string | ❌       |             |
| mobilePhone          | string | ❌       |             |
| customKey            | string | ❌       |             |
| any                  | string | ❌       |             |

**Return Type**

`string`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.contactOverviewGetContactIdAsync({
    contactType: 'contactType',
    email: 'email',
    socialSecurityNumber: 'socialSecurityNumber',
    mobilePhone: 'mobilePhone',
    customKey: 'customKey',
    any: 'any',
  });

  console.log(data);
})();
```

## ContactsV_CreateContactHeaderParam

Create a new, approved contact. If the contacts key identifier (example: Email) already exists : returns the GUID of the first entry found.

- HTTP Method: `POST`
- Endpoint: `/api/v2/contacts`

**Parameters**

| Name               | Type   | Required | Description                                                                                                                  |
| :----------------- | :----- | :------- | :--------------------------------------------------------------------------------------------------------------------------- |
| body               | any    | ✅       | The request body.                                                                                                            |
| source             | string | ❌       | Source system identifier (instance configuration)                                                                            |
| storeExternalId    | string | ❌       | The unique id code of the current store (and therefore also the recruited-by store). Not mandatory but strongly recommended. |
| createAsUnapproved | string | ❌       | Contact is not approved on creation. (Default value false)                                                                   |

**Return Type**

`IApiContact`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.contactsVCreateContactHeaderParam(input, {
    source: 'source',
    storeExternalId: 'storeExternalId',
    createAsUnapproved: 'createAsUnapproved',
  });

  console.log(data);
})();
```

## ContactsV_PromoteToMember

Promote a contact to a member with one or several required fields.

- HTTP Method: `POST`
- Endpoint: `/api/v2/contacts/{contactId}/promoteToMember`

**Parameters**

| Name      | Type   | Required | Description                                       |
| :-------- | :----- | :------- | :------------------------------------------------ |
| body      | any    | ✅       | The request body.                                 |
| contactId | string | ✅       | Contact identifier (GUID).                        |
| source    | string | ❌       | Source system identifier (instance configuration) |

**Return Type**

`IApiContact`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.contactsVPromoteToMember('contactId', input, {
    source: 'source',
  });

  console.log(data);
})();
```

## ContactBulk_CreateContactsInBulk

- HTTP Method: `POST`
- Endpoint: `/api/v2/contacts/bulk`

**Parameters**

| Name        | Type   | Required | Description                                               |
| :---------- | :----- | :------- | :-------------------------------------------------------- |
| body        | any    | ✅       | The request body.                                         |
| contactType | string | ❌       | Optional, if not set the default ContactType will be used |

**Return Type**

`string`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.contactBulkCreateContactsInBulk(input, {
    contactType: 'contactType',
  });

  console.log(data);
})();
```

## ContactBulk_UpdateContactsInBulk

- HTTP Method: `PATCH`
- Endpoint: `/api/v2/contacts/bulk`

**Parameters**

| Name                  | Type    | Required | Description                                               |
| :-------------------- | :------ | :------- | :-------------------------------------------------------- |
| body                  | any     | ✅       | The request body.                                         |
| contactType           | string  | ❌       | Optional, if not set the default ContactType will be used |
| avoidTriggeringExport | boolean | ❌       | Optional, default value is false                          |

**Return Type**

`string`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.contactBulkUpdateContactsInBulk(input, {
    contactType: 'contactType',
    avoidTriggeringExport: true,
  });

  console.log(data);
})();
```

## ContactPreferences_AcceptsSms

Update the preference that indicates whether or not a contact accepts to be contacted via sms. This will also approve an unapproved contact. The primary way of updating a contact preference is through the update contacts endpoint.

- HTTP Method: `POST`
- Endpoint: `/api/v2/contacts/{contactId}/preferences/acceptsSms`

**Parameters**

| Name      | Type                                    | Required | Description                |
| :-------- | :-------------------------------------- | :------- | :------------------------- |
| body      | [BoolRequest](../models/BoolRequest.md) | ✅       | The request body.          |
| contactId | string                                  | ✅       | Contact identifier (GUID). |

**Return Type**

`IApiContact`

**Example Usage Code Snippet**

```typescript
import { BoolRequest, VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const input: BoolRequest = {
    value: true,
  };

  const { data } = await voyadoEngage.contacts.contactPreferencesAcceptsSms('contactId', input);

  console.log(data);
})();
```

## BonusPointTransactions_AdjustRewardPoints

Adds reward points to a contact.

- HTTP Method: `POST`
- Endpoint: `/api/v2/contacts/{contactId}/rewardpointtransaction`

**Parameters**

| Name      | Type                                                        | Required | Description                |
| :-------- | :---------------------------------------------------------- | :------- | :------------------------- |
| body      | [ApiAdjustRewardPoints](../models/ApiAdjustRewardPoints.md) | ✅       | The request body.          |
| contactId | string                                                      | ✅       | Contact identifier (GUID). |

**Return Type**

`ApiAdjustRewardPointsResponse1`

**Example Usage Code Snippet**

```typescript
import { ApiAdjustRewardPoints, VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const input: ApiAdjustRewardPoints = {
    points: 6.21,
    description: 'description',
    type: 'type',
  };

  const { data } = await voyadoEngage.contacts.bonusPointTransactionsAdjustRewardPoints('contactId', input);

  console.log(data);
})();
```

## ContactPreferences_AcceptsEmail

Update the preference that indicates whether or not a contact accepts to be contacted via email. This will also approve an unapproved contact. The primary way of updating a contact preference is through the update contacts endpoint.

- HTTP Method: `POST`
- Endpoint: `/api/v2/contacts/{contactId}/preferences/acceptsEmail`

**Parameters**

| Name      | Type                                    | Required | Description                |
| :-------- | :-------------------------------------- | :------- | :------------------------- |
| body      | [BoolRequest](../models/BoolRequest.md) | ✅       | The request body.          |
| contactId | string                                  | ✅       | Contact identifier (GUID). |

**Return Type**

`IApiContact`

**Example Usage Code Snippet**

```typescript
import { BoolRequest, VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const input: BoolRequest = {
    value: true,
  };

  const { data } = await voyadoEngage.contacts.contactPreferencesAcceptsEmail('contactId', input);

  console.log(data);
})();
```

## ContactPreferences_AcceptsPostal

Update the preference that indicates whether or not a contact accepts to be contacted via regular mail. This will also approve an unapproved contact. The primary way of updating a contact preference is through the update contacts endpoint.

- HTTP Method: `POST`
- Endpoint: `/api/v2/contacts/{contactId}/preferences/acceptsPostal`

**Parameters**

| Name      | Type                                    | Required | Description                |
| :-------- | :-------------------------------------- | :------- | :------------------------- |
| body      | [BoolRequest](../models/BoolRequest.md) | ✅       | The request body.          |
| contactId | string                                  | ✅       | Contact identifier (GUID). |

**Return Type**

`IApiContact`

**Example Usage Code Snippet**

```typescript
import { BoolRequest, VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const input: BoolRequest = {
    value: true,
  };

  const { data } = await voyadoEngage.contacts.contactPreferencesAcceptsPostal('contactId', input);

  console.log(data);
})();
```

## AssignPromotion_Assign

Assign a promotion (multichannel offer only) to a Contact using the internal Contact Id and the id of the promotion

- HTTP Method: `POST`
- Endpoint: `/api/v2/contacts/{contactId}/promotions/{promotionId}/assign`

**Parameters**

| Name        | Type   | Required | Description             |
| :---------- | :----- | :------- | :---------------------- |
| contactId   | string | ✅       | Contact identifier      |
| promotionId | string | ✅       | The id of the promotion |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.assignPromotionAssign('contactId', 'promotionId');

  console.log(data);
})();
```

## OfferPromotions_Redeem

Redeem a promotion (multichannel offer or mobile swipe) for a Contact using the internal Contact Id Redemption channel can be POS, ECOM or OTHER.

- HTTP Method: `POST`
- Endpoint: `/api/v2/contacts/{contactId}/promotions/{promotionId}/redeem`

**Parameters**

| Name        | Type                                            | Required | Description             |
| :---------- | :---------------------------------------------- | :------- | :---------------------- |
| body        | [RedeemBodyModel](../models/RedeemBodyModel.md) | ✅       | The request body.       |
| contactId   | string                                          | ✅       | Contact identifier      |
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

  const { data } = await voyadoEngage.contacts.offerPromotionsRedeem('contactId', 'promotionId', input);

  console.log(data);
})();
```

## ContactMessage_SmsUnsubscribeContact

Optional messageId input if user wants to unsubscribe on specific message instead of last sent Sms

- HTTP Method: `POST`
- Endpoint: `/api/v2/contacts/{contactId}/unsubscribeSms`

**Parameters**

| Name      | Type   | Required | Description                |
| :-------- | :----- | :------- | :------------------------- |
| contactId | string | ✅       | Contact identifier (GUID). |
| messageId | string | ❌       | Message Id (string).       |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.contactMessageSmsUnsubscribeContact('contactId', {
    messageId: 'messageId',
  });

  console.log(data);
})();
```

## ContactMessage_EmailUnsubscribeContact

Optional messageId input if user wants to unsubscribe on specific message instead of last sent email

- HTTP Method: `POST`
- Endpoint: `/api/v2/contacts/{contactId}/unsubscribeEmail`

**Parameters**

| Name      | Type   | Required | Description                |
| :-------- | :----- | :------- | :------------------------- |
| contactId | string | ✅       | Contact identifier (GUID). |
| messageId | string | ❌       | Message Id (string).       |

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.contactMessageEmailUnsubscribeContact('contactId', {
    messageId: 'messageId',
  });

  console.log(data);
})();
```

## ContactsV_UpdateContactType

Updates the contactType for a contact if all expected contact data is available

- HTTP Method: `POST`
- Endpoint: `/api/v2/contacts/{contactId}/updateContactType`

**Parameters**

| Name          | Type   | Required | Description                  |
| :------------ | :----- | :------- | :--------------------------- |
| contactId     | string | ✅       | Contact identifier (GUID).   |
| contactTypeId | string | ✅       | The ContactType id (string). |

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.contacts.contactsVUpdateContactType('contactId', {
    contactTypeId: 'contactTypeId',
  });

  console.log(data);
})();
```
