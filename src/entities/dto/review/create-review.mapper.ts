import { EntityMapper } from '../../../../pkg/entity-mapper';
import { ReviewRatingEntity } from '../../domain/review/review-rating/review-rating.entity';
import { ReviewTextEntity } from '../../domain/review/review-text/review-text.entity';
import { ReviewTitleEntity } from '../../domain/review/review-title/review-title.entity';
import { ReviewEntity } from '../../domain/review/review.entity';
import { CreateReviewDto } from './create-review.dto';

export class CreateReviewMapper implements EntityMapper<ReviewEntity, CreateReviewDto> {
  public toDomain(entity: CreateReviewDto): ReviewEntity {
    return new ReviewEntity(
      entity.id,
      new ReviewTitleEntity(entity.title),
      new ReviewTextEntity(entity.text),
      new ReviewRatingEntity(entity.rating),
      entity.createdAt
    )
  }

  public toEntity(domain: ReviewEntity): CreateReviewDto {
    const result = new CreateReviewDto();

    result.id = domain.id
    result.title = domain.title.value
    result.text = domain.text.value
    result.rating = domain.rating.value
    result.createdAt = domain.createdAt

    return result;
  }
}
