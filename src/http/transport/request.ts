import { ZodType } from 'zod';
import { ContentType, HttpMethod, SdkConfig, RetryOptions, RequestConfig } from '../types';
import { serializeHeader, serializePath, serializeQuery } from '../serializer';
import { HttpRequest } from '../hooks/hook';

interface CreateRequestParameters<T> {
  method: HttpMethod;
  body?: any;
  path: string;
  config: SdkConfig;
  responseSchema: ZodType<T, any, any>;
  requestSchema: ZodType;
  requestContentType: ContentType;
  responseContentType: ContentType;
  requestConfig?: RequestConfig;
}

export class Request<T> {
  public headers: Map<string, unknown> = new Map();

  public queryParams: Map<string, unknown> = new Map();

  public pathParams: Map<string, unknown> = new Map();

  public body?: any;

  public method: HttpMethod;

  public path: string;

  public config: SdkConfig;

  public responseSchema: ZodType<T, any, any>;

  public requestSchema: ZodType;

  public requestContentType: ContentType;

  public responseContentType: ContentType;

  private readonly pathPattern: string;

  constructor(params: CreateRequestParameters<T>) {
    this.method = params.method;
    this.pathPattern = params.path;
    this.body = params.body;
    this.path = this.constructPath();
    this.config = params.config;
    this.responseSchema = params.responseSchema;
    this.requestSchema = params.requestSchema;
    this.requestContentType = params.requestContentType;
    this.responseContentType = params.responseContentType;
    this.applyRequestConfig(params.requestConfig);
  }

  addHeaderParam(key: string, value: unknown): void {
    this.headers.set(key, value);
  }

  addQueryParam(key: string, value: unknown): void {
    this.queryParams.set(key, value);
  }

  addPathParam(key: string, value: unknown): void {
    this.pathParams.set(key, value);
  }

  addBody(body: any): void {
    this.body = body;
  }

  getRetry(): Required<RetryOptions> {
    return {
      attempts: this.config.retry?.attempts ?? 3,
      delayMs: this.config.retry?.delayMs ?? 150,
    };
  }

  getFetchArgs(): { url: string; requestInit: RequestInit } {
    const fetchArgs: { url: string; requestInit: RequestInit } = {
      url: this.constructFullUrl(),
      requestInit: {
        method: this.method,
        body: this.body,
        headers: this.constructHeadersInit(),
      },
    };

    if (this.config.timeout !== undefined) {
      fetchArgs.requestInit = {
        ...fetchArgs.requestInit,
        signal: AbortSignal.timeout(this.config.timeout),
      };
    }

    return fetchArgs;
  }

  public updateFromHookRequest(hookRequest: HttpRequest) {
    this.method = hookRequest.method;
    this.path = hookRequest.path;
    this.body = hookRequest.body;
    this.headers = hookRequest.headers || new Map();
    this.queryParams = hookRequest.queryParams || new Map();
  }

  private applyRequestConfig(requestConfig: RequestConfig | undefined) {
    this.config = {
      ...this.config,
      retry: {
        attempts: requestConfig?.retry?.attempts || this.config.retry?.attempts || 3,
        delayMs: requestConfig?.retry?.delayMs || this.config.retry?.delayMs || 150,
      },
      validation: {
        responseValidation: this.applyResponseValidation(requestConfig),
      },
    };
  }

  private applyResponseValidation(requestConfig: RequestConfig | undefined): boolean {
    if (requestConfig?.validation.responseValidation !== undefined) {
      return requestConfig?.validation.responseValidation;
    }
    if (this.config?.validation?.responseValidation !== undefined) {
      return this.config?.validation?.responseValidation;
    }
    return true;
  }

  private constructFullUrl(): string {
    const queryString = this.constructQueryString();
    return `${this.config.baseUrl}${this.constructPath()}${queryString}`;
  }

  private constructPath(): string {
    const pathParamsRecord: Record<string, unknown> = this.constructParamsRecord(this.pathParams);
    return serializePath(this.pathPattern, pathParamsRecord);
  }

  private constructHeadersInit(): HeadersInit {
    const headerParamsRecord: Record<string, unknown> = this.constructParamsRecord(this.headers);
    return serializeHeader(headerParamsRecord);
  }

  private constructQueryString(): string {
    const queryParamsRecord: Record<string, unknown> = this.constructParamsRecord(this.queryParams);
    return serializeQuery(queryParamsRecord);
  }

  private constructParamsRecord(params: Map<string, unknown>): Record<string, unknown> {
    const record: Record<string, unknown> = {};
    params.forEach((val, key) => {
      record[key] = val;
    });
    return record;
  }
}
