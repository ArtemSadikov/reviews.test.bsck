export class InvalidDataError extends Error {
  constructor(
    private readonly _message: string
  ) {
    super()
    Error.captureStackTrace(this);
  }

  public get message(): string {
    return this._message;
  }
}
