import { inject, injectable } from 'inversify';
import { Repository as TypeOrmRepository } from 'typeorm';
import { GenericRepository } from '../../../../../pkg/generic-repository';
import { ReviewDaoEntity, ReviewDaoEntitySymbol } from '../../../../entities/dao/review/postgres/review.dao';
import { ReviewEntityMapper } from '../../../../entities/dao/review/postgres/review.dao-mapper';
import { ReviewEntity } from '../../../../entities/domain/review/review.entity';
import { ReviewRepository } from '../../../../ports/in/review/repository/review.repository-port';

export const ReviewRepositorySymbol = Symbol.for('ReviewRepository')

@injectable()
export class ReviewRepositoryImpl
  extends GenericRepository<ReviewEntity, ReviewDaoEntity>
    implements ReviewRepository {
  constructor(
    @inject(ReviewDaoEntitySymbol) repository: TypeOrmRepository<ReviewDaoEntity>
  ) {
    super(repository, new ReviewEntityMapper())
  }

  countAll(): Promise<number> {
    return this.repository.count()
  }
}
