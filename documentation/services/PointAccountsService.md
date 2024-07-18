# PointAccountsService

A list of all methods in the `PointAccountsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :---------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [PointAccount_PointAccountGet](#pointaccount_pointaccountget)           | Get the point account by point account id                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [PointAccount_PointDefinition](#pointaccount_pointdefinition)           | ## Gets a point account matched with the pointDefinitionId Gets the name, id and description for each pointDefinition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [PointAccount_PointTransactions](#pointaccount_pointtransactions)       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [PointAccount_PointDefinitions](#pointaccount_pointdefinitions)         | ## Gets point definitions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [PointAccount_PointAccountGet2](#pointaccount_pointaccountget2)         | Gets a list of accounts by contact id                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [PointAccount_PointTransactions2](#pointaccount_pointtransactions2)     | There are two ways to fetch the list of transactions: - Using just the accountId returns the transactions for that particular points account. If this is used, the parameters contactId and definitionId are not required. If they are given, they will just be ignored. - The other way is to specify both contactId and definitionId. Both must be given. The optional parameters offset and count can be used in both cases to paginate the results. The optional parameter filter can also be used to fetch active points, pending points or both. All parameters are added to the query string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [PointAccount_AddPointTransactions](#pointaccount_addpointtransactions) | ## Point transactions being sent to a contacts specified point account, the endpoint will able to take max 1000 transaction rows. ### The following fields should be provided and have certain rules: - contactId: Must be a Guid - amount: The amount of points, negative amounts are accepted. - definitionId: specifies to which point account each transaction should be sent to - timeStamp: If not provided then the default value is taken from the requestors system timezone. - source: Must be provided or else that specified transaction will not be accepted. - description: Must be provided or else that transaction will not be accepted. - validFrom: If not provided then the default value is taken from the requestors system timezone. - validTo: Specifies how long the points are valid ### Important info: If some rows are not correct it will still result in an accepted response code and be skipped. Please check the response for NotAccepted items ### Idempotency-Key: The idempotency key is a unique identifier included in the header of an HTTP request to ensure the idempotence of certain operations. An idempotent operation is one that produces the same result regardless of how many times it is executed with the same input. #### Purpose The primary purpose of the idempotency key is to enable safe retries of requests. In situations where a client needs to resend a request due to network issues or other transient failures, the idempotency key helps prevent unintended side effects by ensuring that repeated requests with the same key result in the same outcome. |

## PointAccount_PointAccountGet

Get the point account by point account id

- HTTP Method: `GET`
- Endpoint: `/api/v2/point-accounts/{id}`

**Parameters**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| id   | number | ✅       | Account id  |

**Return Type**

`PointAccountModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.pointAccounts.pointAccountPointAccountGet(10);

  console.log(data);
})();
```

## PointAccount_PointDefinition

## Gets a point account matched with the pointDefinitionId Gets the name, id and description for each pointDefinition

- HTTP Method: `GET`
- Endpoint: `/api/v2/point-accounts/definitions/{id}`

**Parameters**

| Name | Type   | Required | Description   |
| :--- | :----- | :------- | :------------ |
| id   | number | ✅       | Definition Id |

**Return Type**

`PointDefinitionModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.pointAccounts.pointAccountPointDefinition(9);

  console.log(data);
})();
```

## PointAccount_PointTransactions

- HTTP Method: `GET`
- Endpoint: `/api/v2/point-accounts/transactions/{id}`

**Parameters**

| Name | Type   | Required | Description    |
| :--- | :----- | :------- | :------------- |
| id   | number | ✅       | Transaction id |

**Return Type**

`PointTransactionModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.pointAccounts.pointAccountPointTransactions(3);

  console.log(data);
})();
```

## PointAccount_PointDefinitions

## Gets point definitions

- HTTP Method: `GET`
- Endpoint: `/api/v2/point-accounts/definitions`

**Parameters**

| Name   | Type   | Required | Description     |
| :----- | :----- | :------- | :-------------- |
| offset | number | ❌       | Defaults to 0   |
| count  | number | ❌       | Defaults to 100 |

**Return Type**

`PointDefinitionModel[]`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.pointAccounts.pointAccountPointDefinitions({
    offset: 5,
    count: 1,
  });

  console.log(data);
})();
```

## PointAccount_PointAccountGet2

Gets a list of accounts by contact id

- HTTP Method: `GET`
- Endpoint: `/api/v2/point-accounts`

**Parameters**

| Name      | Type   | Required | Description     |
| :-------- | :----- | :------- | :-------------- |
| contactId | string | ✅       | Contact id      |
| offset    | number | ❌       | Defaults to 0   |
| count     | number | ❌       | Defaults to 100 |

**Return Type**

`PointAccountModelsResult`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.pointAccounts.pointAccountPointAccountGet2({
    contactId: 'contactId',
    offset: 123,
    count: 7,
  });

  console.log(data);
})();
```

## PointAccount_PointTransactions2

There are two ways to fetch the list of transactions: - Using just the accountId returns the transactions for that particular points account. If this is used, the parameters contactId and definitionId are not required. If they are given, they will just be ignored. - The other way is to specify both contactId and definitionId. Both must be given. The optional parameters offset and count can be used in both cases to paginate the results. The optional parameter filter can also be used to fetch active points, pending points or both. All parameters are added to the query string.

- HTTP Method: `GET`
- Endpoint: `/api/v2/point-accounts/transactions`

**Parameters**

| Name         | Type                                                                                      | Required | Description                                                              |
| :----------- | :---------------------------------------------------------------------------------------- | :------- | :----------------------------------------------------------------------- |
| contactId    | string                                                                                    | ❌       | Contact id - Required together with definitionId if not using account id |
| definitionId | number                                                                                    | ❌       | Definition id - Required together with contactId if not using account id |
| accountId    | number                                                                                    | ❌       | Account id - Required if contactId and definitionId is not provided      |
| offset       | number                                                                                    | ❌       | Defaults to 0                                                            |
| count        | number                                                                                    | ❌       | Defaults to 100                                                          |
| filter       | [PointAccountPointTransactions2Filter](../models/PointAccountPointTransactions2Filter.md) | ❌       | All, Active or Pending. If not specified it will default to All.         |

**Return Type**

`PointTransactionModelsResult`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const filter = PointAccountPointTransactions2Filter.All;

  const { data } = await voyadoEngage.pointAccounts.pointAccountPointTransactions2({
    contactId: 'contactId',
    definitionId: 7,
    accountId: 5,
    offset: 3,
    count: 3,
    filter: filter,
  });

  console.log(data);
})();
```

## PointAccount_AddPointTransactions

## Point transactions being sent to a contacts specified point account, the endpoint will able to take max 1000 transaction rows. ### The following fields should be provided and have certain rules: - contactId: Must be a Guid - amount: The amount of points, negative amounts are accepted. - definitionId: specifies to which point account each transaction should be sent to - timeStamp: If not provided then the default value is taken from the requestors system timezone. - source: Must be provided or else that specified transaction will not be accepted. - description: Must be provided or else that transaction will not be accepted. - validFrom: If not provided then the default value is taken from the requestors system timezone. - validTo: Specifies how long the points are valid ### Important info: If some rows are not correct it will still result in an accepted response code and be skipped. Please check the response for NotAccepted items ### Idempotency-Key: The idempotency key is a unique identifier included in the header of an HTTP request to ensure the idempotence of certain operations. An idempotent operation is one that produces the same result regardless of how many times it is executed with the same input. #### Purpose The primary purpose of the idempotency key is to enable safe retries of requests. In situations where a client needs to resend a request due to network issues or other transient failures, the idempotency key helps prevent unintended side effects by ensuring that repeated requests with the same key result in the same outcome.

- HTTP Method: `POST`
- Endpoint: `/api/v2/point-accounts/transactions`

**Parameters**

| Name           | Type                                                                  | Required | Description                  |
| :------------- | :-------------------------------------------------------------------- | :------- | :--------------------------- |
| body           | [PointTransactionToAccount[]](../models/PointTransactionToAccount.md) | ✅       | The request body.            |
| idempotencyKey | string                                                                | ❌       | Optional, lasts for 24 hours |

**Return Type**

`PointTransactionToAccountResultModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.pointAccounts.pointAccountAddPointTransactions(input, {
    idempotencyKey: 'Idempotency-Key',
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
