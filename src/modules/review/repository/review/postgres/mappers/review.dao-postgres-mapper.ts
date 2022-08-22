import { EntityMapper } from '../../../../../../../pkg/entity-mapper';
import { ReviewRatingEntity } from '../../../../../../entities/review/domain/review-rating/review-rating.entity';
import { ReviewTextEntity } from '../../../../../../entities/review/domain/review-text/review-text.entity';
import { ReviewTitleEntity } from '../../../../../../entities/review/domain/review-title/review-title.entity';
import { ReviewEntity } from '../../../../../../entities/review/domain/review.entity';
import { ReviewDaoEntity } from '../dao/review.dao-postgres';

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
