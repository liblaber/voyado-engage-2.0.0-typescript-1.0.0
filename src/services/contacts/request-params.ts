// This file was generated by liblab | https://liblab.com/

import { ChangeType, changeType } from './models/change-type';

export interface ContactsVDeleteWithHeaderParamParams {
  source?: string;
}

export interface ContactBulkGetBulkStatusParams {
  batchId: string;
}

export interface ContactsVGetContactByTypeAndKeyValueAsyncParams {
  keyValue: string;
}

export interface ContactMessageGetLatestMessagesByContactIdParams {
  count?: number;
}

export interface ContactMessageGetMessagesByContactIdParams {
  offset?: number;
  count?: number;
}

export interface TransactionsGetTransactionsByContactIdParams {
  offset?: number;
  count?: number;
}

export interface BonusPointTransactionsGetBonusPointTransactionsForContactParams {
  offset?: number;
  count?: number;
}

export interface ContactsVGetChangedContactIdsParams {
  changeType: ChangeType;
  fromDate: string;
  toDate?: string;
}

export interface OfferPromotionsGetPromotionsForContactParams {
  redemptionChannelType?: string;
}

export interface ContactOverviewGetContactIdAsyncParams {
  contactType?: string;
  email?: string;
  socialSecurityNumber?: string;
  mobilePhone?: string;
  customKey?: string;
  any?: string;
}

export interface ContactsVCreateContactHeaderParamParams {
  source?: string;
  storeExternalId?: string;
  createAsUnapproved?: string;
}

export interface ContactsVPromoteToMemberParams {
  source?: string;
}

export interface ContactBulkCreateContactsInBulkParams {
  contactType?: string;
}

export interface ContactBulkUpdateContactsInBulkParams {
  contactType?: string;
  avoidTriggeringExport?: boolean;
}

export interface ContactMessageSmsUnsubscribeContactParams {
  messageId?: string;
}

export interface ContactMessageEmailUnsubscribeContactParams {
  messageId?: string;
}

export interface ContactsVUpdateContactTypeParams {
  contactTypeId: string;
}
