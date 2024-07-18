# AutomationService

A list of all methods in the `AutomationService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                       | Description |
| :-------------------------------------------------------------------------------------------- | :---------- |
| [CustomTriggers_TriggerByContactId](#customtriggers_triggerbycontactid)                       |             |
| [CustomTriggers_TriggerBySocialSecurityNumber](#customtriggers_triggerbysocialsecuritynumber) |             |
| [CustomTriggers_TriggerByExternalContactId](#customtriggers_triggerbyexternalcontactid)       |             |
| [CustomTriggers_TriggerByContactTypeAndKey](#customtriggers_triggerbycontacttypeandkey)       |             |

## CustomTriggers_TriggerByContactId

- HTTP Method: `POST`
- Endpoint: `/api/v2/automation/customTriggers/{triggerId}/triggerByContactId/{contactId}`

**Parameters**

| Name      | Type   | Required | Description       |
| :-------- | :----- | :------- | :---------------- |
| body      | any    | ✅       | The request body. |
| triggerId | string | ✅       |                   |
| contactId | string | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.automation.customTriggersTriggerByContactId('triggerId', 'contactId', input);

  console.log(data);
})();
```

## CustomTriggers_TriggerBySocialSecurityNumber

- HTTP Method: `POST`
- Endpoint: `/api/v2/automation/customTriggers/{triggerId}/triggerBySocialSecurityNumber/{ssn}`

**Parameters**

| Name      | Type   | Required | Description       |
| :-------- | :----- | :------- | :---------------- |
| body      | any    | ✅       | The request body. |
| triggerId | string | ✅       |                   |
| ssn       | string | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.automation.customTriggersTriggerBySocialSecurityNumber('triggerId', 'ssn', input);

  console.log(data);
})();
```

## CustomTriggers_TriggerByExternalContactId

- HTTP Method: `POST`
- Endpoint: `/api/v2/automation/customTriggers/{triggerId}/triggerByExternalContactId/{externalId}`

**Parameters**

| Name       | Type   | Required | Description       |
| :--------- | :----- | :------- | :---------------- |
| body       | any    | ✅       | The request body. |
| triggerId  | string | ✅       |                   |
| externalId | string | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.automation.customTriggersTriggerByExternalContactId(
    'triggerId',
    'externalId',
    input,
  );

  console.log(data);
})();
```

## CustomTriggers_TriggerByContactTypeAndKey

- HTTP Method: `POST`
- Endpoint: `/api/v2/automation/customTriggers/{triggerId}/triggerByContactTypeAndKey/{contactType}/{keyValue}`

**Parameters**

| Name        | Type   | Required | Description       |
| :---------- | :----- | :------- | :---------------- |
| body        | any    | ✅       | The request body. |
| triggerId   | string | ✅       |                   |
| contactType | string | ✅       |                   |
| keyValue    | string | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.automation.customTriggersTriggerByContactTypeAndKey(
    'triggerId',
    'contactType',
    'keyValue',
    input,
  );

  console.log(data);
})();
```
