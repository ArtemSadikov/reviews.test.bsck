import { inject } from 'inversify';
import { controller, httpGet, httpPost, requestBody, requestParam } from 'inversify-express-utils';
import { ReviewUseCasePort } from '../../../../../../ports/in/review/use-case/review.use-case-port';
import { ReviewUseCaseSymbol } from '../../../../use-case/review/review.use-case';
import { CreateReviewDto } from '../../../../../../entities/dto/review/create-review.dto';
import { TReviewEntityId } from '../../../../../../entities/domain/review/review.entity';
import { ReviewDto } from '../../../../../../entities/dto/review/single-review.dto';
import { ApiPath } from 'swagger-express-ts';

export const ReviewControllerSymbol = Symbol.for('ReviewController');

@ApiPath({
  'path': '/reviews',
  'name': 'Reviews',
  'description': "wow"
})
@controller('/reviews')
export class ReviewController {
  constructor(
    @inject(ReviewUseCaseSymbol)
    private readonly _reviewUseCase: ReviewUseCasePort
  ) {}

  @httpGet('/:id')
  public async getReviewById(
    @requestParam('id') id: TReviewEntityId,
  ): Promise<ReviewDto> {
    const domain = await this._reviewUseCase.getById(id);
    return ReviewDto.fromDomain(domain);
  }

  @httpPost('/')
  public async createReviewById(
    @requestBody() review: CreateReviewDto
  ): Promise<CreateReviewDto> {
    const domain = await this._reviewUseCase.create(CreateReviewDto.toDomain(review))
    return CreateReviewDto.fromDomain(domain);
  }

  @httpGet('/')
  public async getReviewsList(): Promise<CreateReviewDto[]> {
    return []
  }
}
