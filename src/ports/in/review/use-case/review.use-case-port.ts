import { IGenericRepository } from '../../../../../pkg/generic-repository/generic-repository.interface';
import { ReviewEntity } from '../../../../entities/domain/review/review.entity';

export interface ReviewUseCasePort extends IGenericRepository<ReviewEntity> {}
