import { Repository } from 'typeorm';
import { ReviewDaoEntity } from './postgres/dao/review.dao-postgres';

export const ReviewRepositorySymbol = Symbol.for('ReviewRepository')

export interface ReviewRepository extends Repository<ReviewDaoEntity> {}
