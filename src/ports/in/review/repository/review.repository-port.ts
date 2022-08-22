import { ReviewEntity } from '@core/entities/review/domain/review.entity';
import { IGenericRepository } from '@pkg/generic-repository/generic-repository.interface';

export interface ReviewRepository extends IGenericRepository<ReviewEntity> {
  countAll(): Promise<number>
}
