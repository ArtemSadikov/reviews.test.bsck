import { EntityMapper } from '../../../../../../pkg/entity-mapper';
import { UserEntity } from '../../../../../entities/user/domain/user/user.entity';
import { UserDaoEntity } from '../dao/user.dao';

export class UserEntityMapper implements EntityMapper<UserEntity, UserDaoEntity> {
  public toDomain(entity: UserDaoEntity): UserEntity {
    throw new Error('Method not implemented.');
  }

  public toEntity(domain: UserEntity): UserDaoEntity {
    throw new Error('Method not implemented.');
  }
  
}
