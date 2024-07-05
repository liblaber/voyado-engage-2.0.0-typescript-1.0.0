// This file was generated by liblab | https://liblab.com/

import { HttpRequest, HttpResponse, RequestHandler } from '../types';

export class AuthHandler implements RequestHandler {
  next?: RequestHandler;

  async handle<T>(request: HttpRequest<T>): Promise<HttpResponse<T>> {
    const requestWithAuth = this.addAccessTokenHeader(request);

    if (!this.next) {
      throw new Error(`No next handler set in ${AuthHandler.name}`);
    }

    return this.next?.handle(requestWithAuth);
  }

  private addAccessTokenHeader<T>(request: HttpRequest<T>): HttpRequest<T> {
    const newRequest = { ...request };

    const { token } = newRequest.config;
    if (!token) {
      return newRequest;
    }

    if (!newRequest.headers) {
      newRequest.headers = {};
    }

    newRequest.headers['Authorization'] = `Bearer ${token}`;

    return newRequest;
  }
}
