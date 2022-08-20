import { randomUUID } from 'crypto';
import { ReviewTitleEntity } from '../../domain/review/review-title/review-title.entity';
import { ReviewEntity } from '../../domain/review/review.entity';
import { CreateReviewDto } from './create-review.dto';

export type TSingleReviewDtoId = ReturnType<typeof randomUUID>

export class SingleReviewDto {
  id!: TSingleReviewDtoId

  title!: string

  public static fromDomain(domain: ReviewEntity): CreateReviewDto {
    const result = new CreateReviewDto()

    result.id = domain.id;
    result.title = domain.title.value

    return result;
  }

  public static toDomain(dto: SingleReviewDto): ReviewEntity {
    return new ReviewEntity(
      dto.id,
      new ReviewTitleEntity(dto.title)
    )
  } 
}
