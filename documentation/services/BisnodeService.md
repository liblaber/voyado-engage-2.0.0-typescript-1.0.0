# BisnodeService

A list of all methods in the `BisnodeService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description |
| :-------------------------------------------------- | :---------- |
| [BisnodeV_GetEnrichments](#bisnodev_getenrichments) |             |

## BisnodeV_GetEnrichments

- HTTP Method: `GET`
- Endpoint: `/api/v2/bisnode/{contactId}/enrichments`

**Parameters**

| Name      | Type   | Required | Description        |
| :-------- | :----- | :------- | :----------------- |
| contactId | string | ✅       | Contact identifier |

**Return Type**

`EnrichmentVariableGroup[]`

**Example Usage Code Snippet**

```typescript
import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.bisnode.bisnodeVGetEnrichments('contactId');

  console.log(data);
})();
```
