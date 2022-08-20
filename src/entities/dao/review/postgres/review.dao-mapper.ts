import { EntityMapper } from '../../../../../pkg/entity-mapper';
import { ReviewTitleEntity } from '../../../domain/review/review-title/review-title.entity';
import { ReviewEntity } from '../../../domain/review/review.entity';
import { ReviewDaoEntity } from './review.dao';

export class ReviewEntityMapper implements EntityMapper<ReviewEntity, ReviewDaoEntity> {
  public toDomain(entity: ReviewDaoEntity): ReviewEntity {
    const title = new ReviewTitleEntity(entity.title);
    const result = new ReviewEntity(entity.id, title);
    return result
  }

  public toEntity(domain: ReviewEntity): ReviewDaoEntity {
    const result = new ReviewDaoEntity();

    result.id = domain.id;
    result.title = domain.title.value;

    return result;
  }

}
