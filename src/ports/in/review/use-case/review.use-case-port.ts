import { ReviewEntity } from '@core/entities/review/domain/review.entity';
import { IGenericRepository } from '@pkg/generic-repository/generic-repository.interface';

export interface ReviewUseCasePort extends IGenericRepository<ReviewEntity> {}
