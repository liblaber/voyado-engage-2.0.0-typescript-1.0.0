# StatusCodeResult

**Properties**

| Name       | Type       | Required | Description |
| :--------- | :--------- | :------- | :---------- |
| statusCode | StatusCode | ❌       |             |
| request    | any        | ❌       |             |

# StatusCode

**Properties**

| Name                         | Type   | Required | Description                    |
| :--------------------------- | :----- | :------- | :----------------------------- |
| Continue                     | string | ✅       | "Continue"                     |
| SwitchingProtocols           | string | ✅       | "SwitchingProtocols"           |
| OK                           | string | ✅       | "OK"                           |
| Created                      | string | ✅       | "Created"                      |
| Accepted                     | string | ✅       | "Accepted"                     |
| NonAuthoritativeInformation  | string | ✅       | "NonAuthoritativeInformation"  |
| NoContent                    | string | ✅       | "NoContent"                    |
| ResetContent                 | string | ✅       | "ResetContent"                 |
| PartialContent               | string | ✅       | "PartialContent"               |
| MultipleChoices              | string | ✅       | "MultipleChoices"              |
| Ambiguous                    | string | ✅       | "Ambiguous"                    |
| MovedPermanently             | string | ✅       | "MovedPermanently"             |
| Moved                        | string | ✅       | "Moved"                        |
| Found                        | string | ✅       | "Found"                        |
| Redirect                     | string | ✅       | "Redirect"                     |
| SeeOther                     | string | ✅       | "SeeOther"                     |
| RedirectMethod               | string | ✅       | "RedirectMethod"               |
| NotModified                  | string | ✅       | "NotModified"                  |
| UseProxy                     | string | ✅       | "UseProxy"                     |
| Unused                       | string | ✅       | "Unused"                       |
| TemporaryRedirect            | string | ✅       | "TemporaryRedirect"            |
| RedirectKeepVerb             | string | ✅       | "RedirectKeepVerb"             |
| BadRequest                   | string | ✅       | "BadRequest"                   |
| Unauthorized                 | string | ✅       | "Unauthorized"                 |
| PaymentRequired              | string | ✅       | "PaymentRequired"              |
| Forbidden                    | string | ✅       | "Forbidden"                    |
| NotFound                     | string | ✅       | "NotFound"                     |
| MethodNotAllowed             | string | ✅       | "MethodNotAllowed"             |
| NotAcceptable                | string | ✅       | "NotAcceptable"                |
| ProxyAuthenticationRequired  | string | ✅       | "ProxyAuthenticationRequired"  |
| RequestTimeout               | string | ✅       | "RequestTimeout"               |
| Conflict                     | string | ✅       | "Conflict"                     |
| Gone                         | string | ✅       | "Gone"                         |
| LengthRequired               | string | ✅       | "LengthRequired"               |
| PreconditionFailed           | string | ✅       | "PreconditionFailed"           |
| RequestEntityTooLarge        | string | ✅       | "RequestEntityTooLarge"        |
| RequestUriTooLong            | string | ✅       | "RequestUriTooLong"            |
| UnsupportedMediaType         | string | ✅       | "UnsupportedMediaType"         |
| RequestedRangeNotSatisfiable | string | ✅       | "RequestedRangeNotSatisfiable" |
| ExpectationFailed            | string | ✅       | "ExpectationFailed"            |
| UpgradeRequired              | string | ✅       | "UpgradeRequired"              |
| InternalServerError          | string | ✅       | "InternalServerError"          |
| NotImplemented               | string | ✅       | "NotImplemented"               |
| BadGateway                   | string | ✅       | "BadGateway"                   |
| ServiceUnavailable           | string | ✅       | "ServiceUnavailable"           |
| GatewayTimeout               | string | ✅       | "GatewayTimeout"               |
| HttpVersionNotSupported      | string | ✅       | "HttpVersionNotSupported"      |
