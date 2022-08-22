import { IGenericRepository } from '../../../../pkg/generic-repository/generic-repository.interface';
import { UserEntity } from '../../../entities/user/domain/user/user.entity';

export const UserRepositorySymbol = Symbol.for('UserRepository');

export interface UserRepository extends IGenericRepository<UserEntity> {}
