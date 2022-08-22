import { randomUUID } from 'crypto';
import { ReviewRatingEntity } from './review-rating/review-rating.entity';
import { ReviewTextEntity } from './review-text/review-text.entity';
import { ReviewTitleEntity } from './review-title/review-title.entity';

export type TReviewEntityId = ReturnType<typeof randomUUID>

export class ReviewEntity {
  constructor(
    private readonly _id: TReviewEntityId,
    private readonly _title: ReviewTitleEntity,
    private readonly _text: ReviewTextEntity,
    private readonly _rating: ReviewRatingEntity,
    private readonly _createdAt: Date,
  ) {}

  static createWithId(
    id: TReviewEntityId,
    title: ReviewTitleEntity,
    text: ReviewTextEntity,
    rating: ReviewRatingEntity,
    createdAt: Date,
  ) {
    return new ReviewEntity(
      id,
      title,
      text,
      rating,
      createdAt,
    );
  }

  static createWithoutId(
    title: ReviewTitleEntity,
    text: ReviewTextEntity,
    rating: ReviewRatingEntity,
    createdAt: Date,
  ) {
    return new ReviewEntity(
      randomUUID(),
      title,
      text,
      rating,
      createdAt,
    );
  }

  public get title(): ReviewTitleEntity {
    return this._title;
  }

  public get id(): TReviewEntityId {
    return this._id
  }

  public get text(): ReviewTextEntity {
    return this._text;
  }

  public get rating(): ReviewRatingEntity {
    return this._rating;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

}

