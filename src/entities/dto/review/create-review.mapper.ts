import { EntityMapper } from '../../../../pkg/entity-mapper';
import { ReviewTitleEntity } from '../../domain/review/review-title/review-title.entity';
import { ReviewEntity } from '../../domain/review/review.entity';
import { CreateReviewDto } from './create-review.dto';

export class CreateReviewMapper implements EntityMapper<ReviewEntity, CreateReviewDto> {
  public toDomain(entity: CreateReviewDto): ReviewEntity {
    return new ReviewEntity(
      entity.id,
      new ReviewTitleEntity(entity.title)
    )
  }

  public toEntity(domain: ReviewEntity): CreateReviewDto {
    const result = new CreateReviewDto();

    result.id = domain.id
    result.title = domain.title.value

    return result;
  }
}
