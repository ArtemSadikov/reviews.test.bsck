import { ValidateError } from '@pkg/errors/validate.error';

const MAX_TITLE_LENGTH = 10;

export class ReviewTitleEntity {
  constructor(
    private readonly _value: string
  ) {
    if (_value.length > 10) {
      throw new ValidateError("Длина заголовка не должна превышать " + MAX_TITLE_LENGTH);
    }
  }

  get value() {
    return this._value;
  }
}
