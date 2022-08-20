export class ReviewTextEntity {
  constructor(
    private readonly _value: string
  ) {}

  public get value(): string {
    return this._value;
  }
}
