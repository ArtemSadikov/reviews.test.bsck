export class ValidateError extends Error {
  constructor(message: string) {
    super();
    Error.captureStackTrace(this);
    this.message = message;
    this.name = 'Validate error'
  }
}
