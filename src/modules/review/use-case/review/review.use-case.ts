import { ReviewEntity, TReviewEntityId } from '../../../../entities/domain/review/review.entity';
import { ReviewUseCasePort } from '../../../../ports/in/review/use-case/review.use-case-port';
import { ReviewRepository } from '../../../../ports/out/review/review-repository.port';
import { ReviewRepositoryImpl } from '../../repository/review/review.repository';

export const ReviewUseCaseSymbol = Symbol.for('ReviewUseCase');

export class ReviewUseCase implements ReviewUseCasePort {
  constructor(
    private readonly _reviewRepository: ReviewRepository,
  ) {}

  public async create(data: ReviewEntity): Promise<ReviewEntity> {
    return this._reviewRepository.create(data);
  }

  public async getList(): Promise<ReviewEntity[]> {
    return this._reviewRepository.getList();
  }

  public async getById(id: TReviewEntityId): Promise<ReviewEntity> {
    return this._reviewRepository.getById(id);
  }

  public async deleteById(id: TReviewEntityId): Promise<ReviewEntity> {
    return this._reviewRepository.deleteById(id);
  }

  public async editById(id: TReviewEntityId, data: ReviewEntity): Promise<ReviewEntity> {
    return this._reviewRepository.editById(id, data);
  }
}

