# VoyadoEngage TypeScript SDK 1.0.0

Welcome to the VoyadoEngage SDK documentation. This guide will help you get started with integrating and using the VoyadoEngage SDK in your project.

## Versions

- API version: `v2`
- SDK version: `1.0.0`

## Table of Contents

- [Setup & Configuration](#setup--configuration)
  - [Supported Language Versions](#supported-language-versions)
  - [Installation](#installation)
- [Authentication](#authentication)
  - [Access Token Authentication](#access-token-authentication)
- [Services](#services)
- [Models](#models)
- [License](#license)

# Setup & Configuration

## Supported Language Versions

This SDK is compatible with the following versions: `TypeScript >= 4.8.4`

## Installation

To get started with the SDK, we recommend installing using `npm`:

```bash
npm install voyado_engage
```

## Authentication

### Access Token Authentication

The VoyadoEngage API uses an Access Token for authentication.

This token must be provided to authenticate your requests to the API.

#### Setting the Access Token

When you initialize the SDK, you can set the access token as follows:

```ts
const sdk = new VoyadoEngage({ token: 'YOUR_TOKEN' });
```

If you need to set or update the access token after initializing the SDK, you can use:

```ts
const sdk = new VoyadoEngage();
sdk.token = 'YOUR_TOKEN';
```

## Services

The SDK provides various services to interact with the API.

<details> 
<summary>Below is a list of all available services with links to their detailed documentation:</summary>

| Name                                                                             |
| :------------------------------------------------------------------------------- |
| [AchievementsService](documentation/services/AchievementsService.md)             |
| [AutomationService](documentation/services/AutomationService.md)                 |
| [BisnodeService](documentation/services/BisnodeService.md)                       |
| [BonuschecksService](documentation/services/BonuschecksService.md)               |
| [ChallengesService](documentation/services/ChallengesService.md)                 |
| [ConsentsService](documentation/services/ConsentsService.md)                     |
| [ContactoverviewService](documentation/services/ContactoverviewService.md)       |
| [ContactsService](documentation/services/ContactsService.md)                     |
| [InteractionsService](documentation/services/InteractionsService.md)             |
| [InteractionschemasService](documentation/services/InteractionschemasService.md) |
| [InventoryService](documentation/services/InventoryService.md)                   |
| [MemberstatusService](documentation/services/MemberstatusService.md)             |
| [OrdersService](documentation/services/OrdersService.md)                         |
| [PersonlookupService](documentation/services/PersonlookupService.md)             |
| [PointAccountsService](documentation/services/PointAccountsService.md)           |
| [PosoffersService](documentation/services/PosoffersService.md)                   |
| [PromotionsService](documentation/services/PromotionsService.md)                 |
| [SmsService](documentation/services/SmsService.md)                               |
| [StoresService](documentation/services/StoresService.md)                         |
| [TargetAudiencesService](documentation/services/TargetAudiencesService.md)       |
| [TrackingService](documentation/services/TrackingService.md)                     |
| [TransactionsService](documentation/services/TransactionsService.md)             |

</details>

## Models

The SDK includes several models that represent the data structures used in API requests and responses. These models help in organizing and managing the data efficiently.

<details> 
<summary>Below is a list of all available models with links to their detailed documentation:</summary>

| Name                                                                                                               | Description                                                               |
| :----------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| [ApiAchievementValue](documentation/models/ApiAchievementValue.md)                                                 |                                                                           |
| [PagedResultOfApiAchievementDefinition](documentation/models/PagedResultOfApiAchievementDefinition.md)             |                                                                           |
| [EnrichmentVariableGroup](documentation/models/EnrichmentVariableGroup.md)                                         | Grouped BCI enrichment varioables                                         |
| [PagedResultOfAllBonusCheckModel](documentation/models/PagedResultOfAllBonusCheckModel.md)                         |                                                                           |
| [PagedResultOfRedeemedBonusCheckModel](documentation/models/PagedResultOfRedeemedBonusCheckModel.md)               |                                                                           |
| [PagedResultOfAvailableBonusCheckModel](documentation/models/PagedResultOfAvailableBonusCheckModel.md)             |                                                                           |
| [RedeemedBonusCheckModel](documentation/models/RedeemedBonusCheckModel.md)                                         |                                                                           |
| [ChallengeAssignmentModel](documentation/models/ChallengeAssignmentModel.md)                                       |                                                                           |
| [ChallengeDefinitionModel](documentation/models/ChallengeDefinitionModel.md)                                       |                                                                           |
| [ChallengeDefinitionModelsResult](documentation/models/ChallengeDefinitionModelsResult.md)                         |                                                                           |
| [ChallengeGetChallengeDefinitionsStatus](documentation/models/ChallengeGetChallengeDefinitionsStatus.md)           |                                                                           |
| [ChallengeAssignmentModelsResult](documentation/models/ChallengeAssignmentModelsResult.md)                         |                                                                           |
| [ChallengeGetChallengesFilter](documentation/models/ChallengeGetChallengesFilter.md)                               |                                                                           |
| [ChallengeCheckPointDto](documentation/models/ChallengeCheckPointDto.md)                                           |                                                                           |
| [AddCheckpointToChallengeAssignmentResult](documentation/models/AddCheckpointToChallengeAssignmentResult.md)       |                                                                           |
| [ApiConsentDefinition](documentation/models/ApiConsentDefinition.md)                                               |                                                                           |
| [IApiContact](documentation/models/IApiContact.md)                                                                 |                                                                           |
| [ProductRecommendationsModel](documentation/models/ProductRecommendationsModel.md)                                 |                                                                           |
| [PurchaseHistorySummary](documentation/models/PurchaseHistorySummary.md)                                           |                                                                           |
| [ListResultOfApiMessage](documentation/models/ListResultOfApiMessage.md)                                           |                                                                           |
| [PagedResultOfApiMessage](documentation/models/PagedResultOfApiMessage.md)                                         |                                                                           |
| [PagedResultOfTransactionItem](documentation/models/PagedResultOfTransactionItem.md)                               |                                                                           |
| [PagedResultOfBonusPointTransactionModel](documentation/models/PagedResultOfBonusPointTransactionModel.md)         |                                                                           |
| [ChangeType](documentation/models/ChangeType.md)                                                                   |                                                                           |
| [ApiPromotionModel](documentation/models/ApiPromotionModel.md)                                                     |                                                                           |
| [BoolRequest](documentation/models/BoolRequest.md)                                                                 |                                                                           |
| [ApiAdjustRewardPoints](documentation/models/ApiAdjustRewardPoints.md)                                             |                                                                           |
| [ApiAdjustRewardPointsResponse1](documentation/models/ApiAdjustRewardPointsResponse1.md)                           |                                                                           |
| [RedeemBodyModel](documentation/models/RedeemBodyModel.md)                                                         |                                                                           |
| [InteractionModel](documentation/models/InteractionModel.md)                                                       |                                                                           |
| [InteractionPage](documentation/models/InteractionPage.md)                                                         |                                                                           |
| [InteractionCreateResponse](documentation/models/InteractionCreateResponse.md)                                     |                                                                           |
| [InteractionSchemaWithoutJsonModel](documentation/models/InteractionSchemaWithoutJsonModel.md)                     |                                                                           |
| [InteractionSchemaResponse](documentation/models/InteractionSchemaResponse.md)                                     |                                                                           |
| [InteractionSchemaModel](documentation/models/InteractionSchemaModel.md)                                           |                                                                           |
| [StockLevelRequest](documentation/models/StockLevelRequest.md)                                                     |                                                                           |
| [SubscriptionRequest](documentation/models/SubscriptionRequest.md)                                                 |                                                                           |
| [SubscriptionResponse](documentation/models/SubscriptionResponse.md)                                               |                                                                           |
| [MemberStatusModel](documentation/models/MemberStatusModel.md)                                                     |                                                                           |
| [Order](documentation/models/Order.md)                                                                             |                                                                           |
| [StatusCodeResult](documentation/models/StatusCodeResult.md)                                                       |                                                                           |
| [ContactSearchResult](documentation/models/ContactSearchResult.md)                                                 |                                                                           |
| [PointAccountModel](documentation/models/PointAccountModel.md)                                                     |                                                                           |
| [PointDefinitionModel](documentation/models/PointDefinitionModel.md)                                               |                                                                           |
| [PointTransactionModel](documentation/models/PointTransactionModel.md)                                             |                                                                           |
| [PointAccountModelsResult](documentation/models/PointAccountModelsResult.md)                                       |                                                                           |
| [PointTransactionModelsResult](documentation/models/PointTransactionModelsResult.md)                               |                                                                           |
| [PointAccountPointTransactions2Filter](documentation/models/PointAccountPointTransactions2Filter.md)               |                                                                           |
| [PointTransactionToAccount](documentation/models/PointTransactionToAccount.md)                                     |                                                                           |
| [PointTransactionToAccountResultModel](documentation/models/PointTransactionToAccountResultModel.md)               |                                                                           |
| [PagedResultOfAllLoyaltyBarClaimModel](documentation/models/PagedResultOfAllLoyaltyBarClaimModel.md)               |                                                                           |
| [PagedResultOfAvailableLoyaltyBarClaimModel](documentation/models/PagedResultOfAvailableLoyaltyBarClaimModel.md)   |                                                                           |
| [RedeemedLoyaltyBarClaimModel](documentation/models/RedeemedLoyaltyBarClaimModel.md)                               |                                                                           |
| [MultichannelPromotionModel](documentation/models/MultichannelPromotionModel.md)                                   |                                                                           |
| [PromotionValidityModel](documentation/models/PromotionValidityModel.md)                                           | Following class holds the duration information for a promotion.           |
| &nbsp;The this object uses to set and get the duration of a promotion.                                             |
| [MultichannelBasePromotionModel](documentation/models/MultichannelBasePromotionModel.md)                           |                                                                           |
| [SendSmsRequest](documentation/models/SendSmsRequest.md)                                                           |                                                                           |
| [SendSmsResponse](documentation/models/SendSmsResponse.md)                                                         |                                                                           |
| [ApiStore](documentation/models/ApiStore.md)                                                                       |                                                                           |
| [IdName](documentation/models/IdName.md)                                                                           |                                                                           |
| [CartApiModel](documentation/models/CartApiModel.md)                                                               | Cart model                                                                |
| [OkResult](documentation/models/OkResult.md)                                                                       |                                                                           |
| [ProductViewApiModel](documentation/models/ProductViewApiModel.md)                                                 |                                                                           |
| [Receipt](documentation/models/Receipt.md)                                                                         |                                                                           |
| [ImportTransactionsObject](documentation/models/ImportTransactionsObject.md)                                       |                                                                           |
| [ApiAchievementDefinition](documentation/models/ApiAchievementDefinition.md)                                       |                                                                           |
| [EnrichmentVariable](documentation/models/EnrichmentVariable.md)                                                   | An enrichment value for a certain BCI variable                            |
| [AllBonusCheckModel](documentation/models/AllBonusCheckModel.md)                                                   |                                                                           |
| [AvailableBonusCheckModel](documentation/models/AvailableBonusCheckModel.md)                                       |                                                                           |
| [ChallengeAssignmentModelStatus](documentation/models/ChallengeAssignmentModelStatus.md)                           |                                                                           |
| [IHypermediaLink](documentation/models/IHypermediaLink.md)                                                         |                                                                           |
| [CheckpointAssignOn](documentation/models/CheckpointAssignOn.md)                                                   |                                                                           |
| [ChallengeDefinitionModelStatus](documentation/models/ChallengeDefinitionModelStatus.md)                           |                                                                           |
| [IApiConsent](documentation/models/IApiConsent.md)                                                                 |                                                                           |
| [ApiMessage](documentation/models/ApiMessage.md)                                                                   |                                                                           |
| [TransactionItem](documentation/models/TransactionItem.md)                                                         |                                                                           |
| [BonusPointTransactionModel](documentation/models/BonusPointTransactionModel.md)                                   |                                                                           |
| [BonusPointTransactionModelType](documentation/models/BonusPointTransactionModelType.md)                           |                                                                           |
| [ApiPromotionRedemptionChannelModel](documentation/models/ApiPromotionRedemptionChannelModel.md)                   |                                                                           |
| [ApiPromotionRedemptionChannelModelType](documentation/models/ApiPromotionRedemptionChannelModelType.md)           |                                                                           |
| [ApiPromotionRedemptionChannelModelValueType](documentation/models/ApiPromotionRedemptionChannelModelValueType.md) |                                                                           |
| [HypermediaLink](documentation/models/HypermediaLink.md)                                                           |                                                                           |
| [InteractionCreateResponseSelf](documentation/models/InteractionCreateResponseSelf.md)                             |                                                                           |
| [InteractionSchemaResponseSelf](documentation/models/InteractionSchemaResponseSelf.md)                             |                                                                           |
| [OrderContact](documentation/models/OrderContact.md)                                                               |                                                                           |
| [OrderItem](documentation/models/OrderItem.md)                                                                     |                                                                           |
| [TaxDetail](documentation/models/TaxDetail.md)                                                                     |                                                                           |
| [OrderPaymentMethod](documentation/models/OrderPaymentMethod.md)                                                   |                                                                           |
| [OrderFee](documentation/models/OrderFee.md)                                                                       |                                                                           |
| [OrderContactMatchKeyType](documentation/models/OrderContactMatchKeyType.md)                                       |                                                                           |
| [OrderItemType](documentation/models/OrderItemType.md)                                                             |                                                                           |
| [OrderItemDiscount](documentation/models/OrderItemDiscount.md)                                                     |                                                                           |
| [StatusCode](documentation/models/StatusCode.md)                                                                   |                                                                           |
| [SearchKey](documentation/models/SearchKey.md)                                                                     |                                                                           |
| [UnregisteredFromOnlineRegisterInformation](documentation/models/UnregisteredFromOnlineRegisterInformation.md)     |                                                                           |
| [AllLoyaltyBarClaimModel](documentation/models/AllLoyaltyBarClaimModel.md)                                         |                                                                           |
| [AvailableLoyaltyBarClaimModel](documentation/models/AvailableLoyaltyBarClaimModel.md)                             |                                                                           |
| [MultichannelPromotionModelStatus](documentation/models/MultichannelPromotionModelStatus.md)                       | Current status of the promotion                                           |
| [PromotionBasicPresentationModel](documentation/models/PromotionBasicPresentationModel.md)                         | Following object is for get/set the presentational side of the promotion. |

&nbsp;This data uses to displey in different kind of views, for an example in Email messages etc.
&nbsp;
&nbsp;This fields populates the "Presentation" section in the admin UI. |
| [MultichannelPromotionRedemptionChannelModel](documentation/models/MultichannelPromotionRedemptionChannelModel.md) | |
| [AssignDateRange](documentation/models/AssignDateRange.md) | The validity time of the promotion set when assignment occured |
| [Unit](documentation/models/Unit.md) | |
| [MultichannelPromotionRedemptionChannelModelType](documentation/models/MultichannelPromotionRedemptionChannelModelType.md) | |
| [MultichannelPromotionRedemptionChannelModelValueType](documentation/models/MultichannelPromotionRedemptionChannelModelValueType.md) | |
| [CartItemApiModel](documentation/models/CartItemApiModel.md) | Cart item model |
| [Utm](documentation/models/Utm.md) | |
| [ReceiptContact](documentation/models/ReceiptContact.md) | |
| [ReceiptPaymentMethod](documentation/models/ReceiptPaymentMethod.md) | |
| [ReceiptItem](documentation/models/ReceiptItem.md) | |
| [ReceiptTaxDetail](documentation/models/ReceiptTaxDetail.md) | |
| [ReceiptUsedBonusCheck](documentation/models/ReceiptUsedBonusCheck.md) | |
| [ReceiptUsedPromotion](documentation/models/ReceiptUsedPromotion.md) | |
| [ReceiptExtraDataItem](documentation/models/ReceiptExtraDataItem.md) | |
| [ReceiptContactMatchKeyType](documentation/models/ReceiptContactMatchKeyType.md) | |
| [ReceiptItemType](documentation/models/ReceiptItemType.md) | |
| [ReceiptItemDiscount](documentation/models/ReceiptItemDiscount.md) | |

</details>

## License

This SDK is licensed under the MIT License.

See the [LICENSE](LICENSE) file for more details.

<!-- This file was generated by liblab | https://liblab.com/ -->
