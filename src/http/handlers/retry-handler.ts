import { Request } from '../transport/request';
import { HttpResponse, RequestHandler } from '../types';
import { HttpError } from '../error';

export class RetryHandler implements RequestHandler {
  next?: RequestHandler;

  async handle<T>(request: Request<T>): Promise<HttpResponse<T>> {
    if (!this.next) {
      throw new Error('No next handler set in retry handler.');
    }

    const retry = request.getRetry();
    for (let attempt = 1; attempt <= retry.attempts; attempt++) {
      try {
        return await this.next.handle(request);
      } catch (error: any) {
        if (!this.shouldRetry(error) || attempt === retry.attempts) {
          throw error;
        }
        await this.delay(retry.delayMs);
      }
    }

    throw new Error('Error retrying request.');
  }

  private shouldRetry(error: Error): boolean {
    return error instanceof HttpError && (error.metadata.status >= 500 || error.metadata.status === 408);
  }

  private delay(delayMs: number): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), delayMs);
    });
  }
}
