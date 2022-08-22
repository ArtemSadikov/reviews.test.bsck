import { randomUUID } from 'crypto';
import { ReviewRatingEntity } from '../../domain/review-rating/review-rating.entity';
import { ReviewTextEntity } from '../../domain/review-text/review-text.entity';
import { ReviewTitleEntity } from '../../domain/review-title/review-title.entity';
import { ReviewEntity } from '../../domain/review.entity';

export type TCreateReviewDto = ReturnType<typeof randomUUID>

export class CreateReviewDto {
  id!: TCreateReviewDto

  title!: string

  text!: string

  rating!: number

  createdAt!: Date

  public static fromDomain(domain: ReviewEntity): CreateReviewDto {
    const result = new CreateReviewDto()

    result.id = domain.id;
    result.title = domain.title.value

    return result;
  }

  public static toDomain(dto: CreateReviewDto): ReviewEntity {
    return new ReviewEntity(
      dto.id,
      new ReviewTitleEntity(dto.title),
      new ReviewTextEntity(dto.text),
      new ReviewRatingEntity(dto.rating),
      dto.createdAt,
    )
  } 
}
