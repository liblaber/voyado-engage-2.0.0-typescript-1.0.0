# ContactSearchResult

**Properties**

| Name                                      | Type                                      | Required | Description |
| :---------------------------------------- | :---------------------------------------- | :------- | :---------- |
| firstName                                 | string                                    | ❌       |             |
| lastName                                  | string                                    | ❌       |             |
| careOf                                    | string                                    | ❌       |             |
| street                                    | string                                    | ❌       |             |
| zipCode                                   | string                                    | ❌       |             |
| city                                      | string                                    | ❌       |             |
| birthDay                                  | string                                    | ❌       |             |
| status                                    | string                                    | ❌       |             |
| country                                   | string                                    | ❌       |             |
| phoneNumber                               | string                                    | ❌       |             |
| mobilePhoneNumber                         | string                                    | ❌       |             |
| gender                                    | string                                    | ❌       |             |
| searchKey                                 | SearchKey                                 | ❌       |             |
| unregisteredFromOnlineRegisterInformation | UnregisteredFromOnlineRegisterInformation | ❌       |             |

# SearchKey

**Properties**

| Name                 | Type   | Required | Description            |
| :------------------- | :----- | :------- | :--------------------- |
| MobilePhone          | string | ✅       | "MobilePhone"          |
| SocialSecurityNumber | string | ✅       | "SocialSecurityNumber" |
