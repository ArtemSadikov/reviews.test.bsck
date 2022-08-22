import { inject, injectable } from 'inversify';
import { Repository } from 'typeorm';
import { GenericRepository } from '../../../../../pkg/generic-repository';
import { UserDaoEntity, UserDaoEntitySymbol } from './dao/user.dao';
import { UserEntityMapper } from './mappers/user.dao-mapper';
import { UserEntity } from '../../../../entities/user/domain/user/user.entity';
import { UserRepository } from '../user.interface-repository';

export const UserRepositoryImplSymbol = Symbol.for('UserRepositoryImpl')

@injectable()
export class UserRepositoryImpl
  extends GenericRepository<UserEntity, UserDaoEntity>
    implements UserRepository {
  constructor(
    @inject(UserDaoEntitySymbol)
    repository: Repository<UserDaoEntity>
  ) {
    super(repository, new UserEntityMapper())
  }
}
