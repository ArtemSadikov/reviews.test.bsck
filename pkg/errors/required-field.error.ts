import { ValidateError } from './validate.error';

export class RequiredFieldError extends ValidateError {
  constructor(
    private readonly _field: string,
    private readonly _message: string
  ) {
    super(_message)
  }

  public get field(): string {
    return this._field;
  }
}
