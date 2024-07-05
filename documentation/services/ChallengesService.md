# ChallengesService

A list of all methods in the `ChallengesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                       | Description                                                                                |
| :---------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------- |
| [Challenge_GetChallengeById](#challenge_getchallengebyid)                     | Get an challenge assignment by id.                                                         |
| [Challenge_GetChallengeDefinitionById](#challenge_getchallengedefinitionbyid) | Get a challenge definition by id.                                                          |
| [Challenge_GetChallengeDefinitions](#challenge_getchallengedefinitions)       | Get a list of all the challenge definitions.                                               |
| [Challenge_GetChallenges](#challenge_getchallenges)                           | Search for challenges for a contact.                                                       |
| [Challenge_AddChallengeCheckPoints](#challenge_addchallengecheckpoints)       | Send in a list of checkpoints to be assigned to a some challenge for a number of contacts, |

&nbsp;the endpoint will able to take max 1000 checkpoint rows.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;### The following fields should be provided:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;- definitionId: Must be a Guid
&nbsp;- contactId: Must be a Guid
&nbsp;- checkPointAmount: Number of checkpoints to assign to the challenge
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;### Important info:
&nbsp;If some rows are not correct it will still result in an accepted response code and be skipped. Please
&nbsp;check the response for NotAccepted items |
|[Challenge_Consent](#challenge_consent)| Will assign the challenge for the contact and return true. If the contact already
&nbsp;has been assigned for the challenge it will also return true. |

## Challenge_GetChallengeById

Get an challenge assignment by id.

- HTTP Method: `GET`
- Endpoint: `/api/v2/challenges/{id}`

**Parameters**

| Name | Type   | Required | Description   |
| :--- | :----- | :------- | :------------ |
| id   | string | ✅       | Assignment id |

**Return Type**

`ChallengeAssignmentModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.challenges.challengeGetChallengeById('id');

  console.log(data);
})();
```

## Challenge_GetChallengeDefinitionById

Get a challenge definition by id.

- HTTP Method: `GET`
- Endpoint: `/api/v2/challenges/definitions/{id}`

**Parameters**

| Name | Type   | Required | Description   |
| :--- | :----- | :------- | :------------ |
| id   | string | ✅       | Definition id |

**Return Type**

`ChallengeDefinitionModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.challenges.challengeGetChallengeDefinitionById('id');

  console.log(data);
})();
```

## Challenge_GetChallengeDefinitions

Get a list of all the challenge definitions.

- HTTP Method: `GET`
- Endpoint: `/api/v2/challenges/definitions`

**Parameters**

| Name   | Type                                                                                          | Required | Description                                                          |
| :----- | :-------------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------- |
| offset | number                                                                                        | ❌       | Defaults to 0                                                        |
| count  | number                                                                                        | ❌       | Defaults to 100                                                      |
| status | [ChallengeGetChallengeDefinitionsStatus](../models/ChallengeGetChallengeDefinitionsStatus.md) | ❌       | All, Active, Draft or Ended. If not specified it will default to All |

**Return Type**

`ChallengeDefinitionModelsResult`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const status = ChallengeGetChallengeDefinitionsStatus.All;

  const { data } = await voyadoEngage.challenges.challengeGetChallengeDefinitions({
    offset: 2,
    count: 1,
    status: status,
  });

  console.log(data);
})();
```

## Challenge_GetChallenges

Search for challenges for a contact.

- HTTP Method: `GET`
- Endpoint: `/api/v2/challenges`

**Parameters**

| Name         | Type                                                                      | Required | Description                                                                     |
| :----------- | :------------------------------------------------------------------------ | :------- | :------------------------------------------------------------------------------ |
| contactId    | string                                                                    | ✅       | Contact id                                                                      |
| definitionId | string                                                                    | ❌       | Definition id - Optional to limit to a certain challenge definition             |
| offset       | number                                                                    | ❌       | Defaults to 0                                                                   |
| count        | number                                                                    | ❌       | Defaults to 100                                                                 |
| filter       | [ChallengeGetChallengesFilter](../models/ChallengeGetChallengesFilter.md) | ❌       | All, Active, Completed or NotCompleted. If not specified it will default to All |

**Return Type**

`ChallengeAssignmentModelsResult`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const filter = ChallengeGetChallengesFilter.All;

  const { data } = await voyadoEngage.challenges.challengeGetChallenges({
    contactId: 'contactId',
    definitionId: 'definitionId',
    offset: 3,
    count: 1,
    filter: filter,
  });

  console.log(data);
})();
```

## Challenge_AddChallengeCheckPoints

Send in a list of checkpoints to be assigned to a some challenge for a number of contacts,
&nbsp;the endpoint will able to take max 1000 checkpoint rows.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;### The following fields should be provided:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;- definitionId: Must be a Guid
&nbsp;- contactId: Must be a Guid
&nbsp;- checkPointAmount: Number of checkpoints to assign to the challenge
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;### Important info:
&nbsp;If some rows are not correct it will still result in an accepted response code and be skipped. Please
&nbsp;check the response for NotAccepted items

- HTTP Method: `POST`
- Endpoint: `/api/v2/challenges/checkpoints`

**Parameters**

| Name | Type                                                            | Required | Description       |
| :--- | :-------------------------------------------------------------- | :------- | :---------------- |
| body | [ChallengeCheckPointDto[]](../models/ChallengeCheckPointDto.md) | ✅       | The request body. |

**Return Type**

`AddCheckpointToChallengeAssignmentResult`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.challenges.challengeAddChallengeCheckPoints(input);

  console.log(data);
})();
```

## Challenge_Consent

Will assign the challenge for the contact and return true. If the contact already
&nbsp;has been assigned for the challenge it will also return true.

- HTTP Method: `POST`
- Endpoint: `/api/v2/challenges/definitions/{id}/assign`

**Parameters**

| Name      | Type   | Required | Description   |
| :-------- | :----- | :------- | :------------ |
| id        | string | ✅       | Definition id |
| contactId | string | ✅       | Contact id    |

**Return Type**

`boolean`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.challenges.challengeConsent('id', {
    contactId: 'contactId',
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
