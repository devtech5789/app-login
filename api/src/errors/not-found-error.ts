import { CustomError } from './custom-errors';

export class NotFoundError extends CustomError {
  statusCode = 404;
  reason = 'Not Found';

  constructor() {
    super('Route not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
