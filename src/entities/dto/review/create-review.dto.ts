import { randomUUID } from 'crypto';
import { ReviewTitleEntity } from '../../domain/review/review-title/review-title.entity';
import { ReviewEntity } from '../../domain/review/review.entity';

export type TCreateReviewDto = ReturnType<typeof randomUUID>

export class CreateReviewDto {
  id!: TCreateReviewDto

  title!: string

  public static fromDomain(domain: ReviewEntity): CreateReviewDto {
    const result = new CreateReviewDto()

    result.id = domain.id;
    result.title = domain.title.value

    return result;
  }

  public static toDomain(dto: CreateReviewDto): ReviewEntity {
    return new ReviewEntity(
      dto.id,
      new ReviewTitleEntity(dto.title)
    )
  } 
}
