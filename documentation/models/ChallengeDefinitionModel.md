# ChallengeDefinitionModel

**Properties**

| Name                        | Type                           | Required | Description |
| :-------------------------- | :----------------------------- | :------- | :---------- |
| checkpointAssignOn          | CheckpointAssignOn             | ❌       |             |
| checkpointAssignOnAmount    | number                         | ❌       |             |
| createdBy                   | string                         | ❌       |             |
| createdOn                   | string                         | ❌       |             |
| description                 | string                         | ❌       |             |
| expirationMonths            | number                         | ❌       |             |
| id                          | string                         | ❌       |             |
| isContactConsentRequired    | boolean                        | ❌       |             |
| isScheduled                 | boolean                        | ❌       |             |
| modifiedBy                  | string                         | ❌       |             |
| modifiedOn                  | string                         | ❌       |             |
| name                        | string                         | ❌       |             |
| requiredNumberOfCheckpoints | number                         | ❌       |             |
| scheduledFrom               | string                         | ❌       |             |
| scheduledTo                 | string                         | ❌       |             |
| status                      | ChallengeDefinitionModelStatus | ❌       |             |
| links                       | IHypermediaLink[]              | ❌       |             |

# CheckpointAssignOn

**Properties**

| Name                | Type   | Required | Description           |
| :------------------ | :----- | :------- | :-------------------- |
| None                | string | ✅       | "None"                |
| ReceiptTotal        | string | ✅       | "ReceiptTotal"        |
| ReceiptLineQuantity | string | ✅       | "ReceiptLineQuantity" |
| ReceiptLineTotal    | string | ✅       | "ReceiptLineTotal"    |

# ChallengeDefinitionModelStatus

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| All       | string | ✅       | "All"       |
| Active    | string | ✅       | "Active"    |
| Draft     | string | ✅       | "Draft"     |
| Scheduled | string | ✅       | "Scheduled" |
| Ended     | string | ✅       | "Ended"     |
