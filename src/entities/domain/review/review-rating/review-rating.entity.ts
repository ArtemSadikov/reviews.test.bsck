export class ReviewRatingEntity {
  constructor(
    private readonly _value: number
  ) {}

  public get value(): number {
    return this._value;
  }
}
