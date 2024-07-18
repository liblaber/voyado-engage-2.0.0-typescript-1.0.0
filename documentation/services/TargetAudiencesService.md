# TargetAudiencesService

A list of all methods in the `TargetAudiencesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                 | Description |
| :---------------------------------------------------------------------- | :---------- |
| [TargetAudience_GetTargetAudiences](#targetaudience_gettargetaudiences) |             |

## TargetAudience_GetTargetAudiences

- HTTP Method: `GET`
- Endpoint: `/api/v2/target-audiences`

**Return Type**

`IdName[]`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.targetAudiences.targetAudienceGetTargetAudiences();

  console.log(data);
})();
```
