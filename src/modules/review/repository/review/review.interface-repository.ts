import { inject, injectable } from 'inversify';
import { Repository } from 'typeorm';
import { ReviewDaoEntity } from '../../../../entities/dao/review/postgres/review.dao';

export const ReviewRepositorySymbol = Symbol.for('ReviewRepository')

export interface ReviewRepository extends Repository<ReviewDaoEntity> {}
