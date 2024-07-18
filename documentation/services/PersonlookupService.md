# PersonlookupService

A list of all methods in the `PersonlookupService` service. Click on the method name to view detailed information about that method.

| Methods                                                       | Description |
| :------------------------------------------------------------ | :---------- |
| [PersonLookup_GetPersonLookup](#personlookup_getpersonlookup) |             |

## PersonLookup_GetPersonLookup

- HTTP Method: `GET`
- Endpoint: `/api/v2/personlookup/getpersonlookup`

**Parameters**

| Name                 | Type   | Required | Description                                 |
| :------------------- | :----- | :------- | :------------------------------------------ |
| socialSecurityNumber | string | ❌       | String that contains social security number |
| phoneNumber          | string | ❌       | String that contains mobile phone number    |
| countryCode          | string | ❌       | Country where the contact is registered     |

**Return Type**

`ContactSearchResult`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.personlookup.personLookupGetPersonLookup({
    socialSecurityNumber: 'socialSecurityNumber',
    phoneNumber: 'phoneNumber',
    countryCode: 'countryCode',
  });

  console.log(data);
})();
```
