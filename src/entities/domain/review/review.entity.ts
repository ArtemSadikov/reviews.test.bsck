import { randomUUID } from 'crypto';
import { ReviewTitleEntity } from './review-title/review-title.entity';

export type TReviewEntityId = ReturnType<typeof randomUUID>

export class ReviewEntity {
  constructor(
    private readonly _id: TReviewEntityId,
    private readonly _title: ReviewTitleEntity
  ) {}

  static createWithId(
    id: TReviewEntityId,
    title: ReviewTitleEntity
  ) {
    return new ReviewEntity(
      id,
      title
    );
  }

  static createWithoutId(title: ReviewTitleEntity) {
    return new ReviewEntity(
      randomUUID(),
      title
    );
  }

  public get title(): ReviewTitleEntity {
    return this._title;
  }

  public get id(): TReviewEntityId {
    return this._id
  }
}

