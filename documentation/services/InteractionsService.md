# InteractionsService

A list of all methods in the `InteractionsService` service. Click on the method name to view detailed information about that method.

| Methods                                                         | Description                                                                                                                                                                                                                                                                            |
| :-------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Interaction_GetInteraction](#interaction_getinteraction)       | Retrieve a specific Interaction by providing the interactionId.                                                                                                                                                                                                                        |
| [Interaction_DeleteInteraction](#interaction_deleteinteraction) | Delete a specific Interaction by providing the interactionId.                                                                                                                                                                                                                          |
| [Interaction_GetInteractions](#interaction_getinteractions)     | Retrieve multiple Interactions of a specified type connected to a specific contactId. Both schemaId and contactId are required. The continuation parameter can be used to access the next page when there are more than 50 records available. This token can be found in the response. |
| [Interaction_CreateInteraction](#interaction_createinteraction) | Create a new Interaction connected to a specific contactId.                                                                                                                                                                                                                            |

## Interaction_GetInteraction

Retrieve a specific Interaction by providing the interactionId.

- HTTP Method: `GET`
- Endpoint: `/api/v2/interactions/{interactionId}`

**Parameters**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| interactionId | string | ✅       |             |

**Return Type**

`InteractionModel`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.interactions.interactionGetInteraction('interactionId');

  console.log(data);
})();
```

## Interaction_DeleteInteraction

Delete a specific Interaction by providing the interactionId.

- HTTP Method: `DELETE`
- Endpoint: `/api/v2/interactions/{interactionId}`

**Parameters**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| interactionId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.interactions.interactionDeleteInteraction('interactionId');

  console.log(data);
})();
```

## Interaction_GetInteractions

Retrieve multiple Interactions of a specified type connected to a specific contactId. Both schemaId and contactId are required. The continuation parameter can be used to access the next page when there are more than 50 records available. This token can be found in the response.

- HTTP Method: `GET`
- Endpoint: `/api/v2/interactions`

**Parameters**

| Name         | Type   | Required | Description |
| :----------- | :----- | :------- | :---------- |
| contactId    | string | ✅       |             |
| schemaId     | string | ✅       |             |
| continuation | string | ❌       |             |

**Return Type**

`InteractionPage`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.interactions.interactionGetInteractions({
    contactId: 'contactId',
    schemaId: 'schemaId',
    continuation: 'continuation',
  });

  console.log(data);
})();
```

## Interaction_CreateInteraction

Create a new Interaction connected to a specific contactId.

- HTTP Method: `POST`
- Endpoint: `/api/v2/interactions`

**Parameters**

| Name | Type | Required | Description       |
| :--- | :--- | :------- | :---------------- |
| body | any  | ✅       | The request body. |

**Return Type**

`InteractionCreateResponse`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.interactions.interactionCreateInteraction(input);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
