import { inject, injectable } from 'inversify';
import { Repository as TypeOrmRepository } from 'typeorm';
import { ReviewEntityMapper } from './mappers/review.dao-postgres-mapper';
import { ReviewDaoEntity, ReviewDaoEntitySymbol } from './dao/review.dao-postgres';
import { ReviewEntity } from '@core/entities/review/domain/review.entity';
import { GenericRepository } from '@pkg/generic-repository';
import { ReviewRepository } from '@core/ports/in/review/repository/review.repository-port';

export const ReviewRepositorySymbol = Symbol.for('ReviewRepository')

@injectable()
export class ReviewRepositoryImpl
  extends GenericRepository<ReviewEntity, ReviewDaoEntity>
    implements ReviewRepository {
  constructor(
    @inject(ReviewDaoEntitySymbol)
    repository: TypeOrmRepository<ReviewDaoEntity>
  ) {
    super(repository, new ReviewEntityMapper())
  }

  countAll(): Promise<number> {
    return this.repository.count()
  }
}
