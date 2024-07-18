# ChallengeAssignmentModel

**Properties**

| Name                    | Type                           | Required | Description |
| :---------------------- | :----------------------------- | :------- | :---------- |
| challengeCompletedOn    | string                         | ❌       |             |
| challengeEnd            | string                         | ❌       |             |
| challengeId             | string                         | ❌       |             |
| challengeStart          | string                         | ❌       |             |
| completedCheckpoints    | number                         | ❌       |             |
| imageUrl                | string                         | ❌       |             |
| contactId               | string                         | ❌       |             |
| id                      | string                         | ❌       |             |
| isActive                | boolean                        | ❌       |             |
| isChallengeCompleted    | boolean                        | ❌       |             |
| latestCheckpointAddedOn | string                         | ❌       |             |
| requiredCheckpoints     | number                         | ❌       |             |
| status                  | ChallengeAssignmentModelStatus | ❌       |             |
| links                   | IHypermediaLink[]              | ❌       |             |

# ChallengeAssignmentModelStatus

**Properties**

| Name         | Type   | Required | Description    |
| :----------- | :----- | :------- | :------------- |
| Unknown      | string | ✅       | "Unknown"      |
| Completed    | string | ✅       | "Completed"    |
| NotCompleted | string | ✅       | "NotCompleted" |
| Active       | string | ✅       | "Active"       |
