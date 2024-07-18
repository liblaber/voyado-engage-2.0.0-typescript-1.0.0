import {
  PointAccountPointTransactions2Filter,
  pointAccountPointTransactions2Filter,
} from './models/point-account-point-transactions2-filter';

export interface PointAccountPointDefinitionsParams {
  offset?: number;
  count?: number;
}

export interface PointAccountPointAccountGet2Params {
  contactId: string;
  offset?: number;
  count?: number;
}

export interface PointAccountPointTransactions2Params {
  contactId?: string;
  definitionId?: number;
  accountId?: number;
  offset?: number;
  count?: number;
  filter?: PointAccountPointTransactions2Filter;
}

export interface PointAccountAddPointTransactionsParams {
  idempotencyKey?: string;
}
