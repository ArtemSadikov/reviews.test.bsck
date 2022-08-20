import { EntityMapper } from '../../../../../pkg/entity-mapper';
import { ReviewRatingEntity } from '../../../domain/review/review-rating/review-rating.entity';
import { ReviewTextEntity } from '../../../domain/review/review-text/review-text.entity';
import { ReviewTitleEntity } from '../../../domain/review/review-title/review-title.entity';
import { ReviewEntity } from '../../../domain/review/review.entity';
import { ReviewDaoEntity } from './review.dao';

export class ReviewEntityMapper implements EntityMapper<ReviewEntity, ReviewDaoEntity> {
  public toDomain(entity: ReviewDaoEntity): ReviewEntity {
    const title = new ReviewTitleEntity(entity.title);
    const text = new ReviewTextEntity(entity.text);
    const rating = new ReviewRatingEntity(entity.rating);
    const result = new ReviewEntity(
      entity.id,
      title,
      text,
      rating,
      entity.createdAt,
    );
    return result
  }

  public toEntity(domain: ReviewEntity): ReviewDaoEntity {
    const result = new ReviewDaoEntity();

    result.id = domain.id;
    result.title = domain.title.value;
    result.text = domain.text.value;
    result.rating = domain.rating.value;

    return result;
  }

}
