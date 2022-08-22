import { randomUUID } from 'crypto';
import { UserNameEntity } from './user-name/user-name.entity';

export type TUserEntityId = ReturnType<typeof randomUUID>

export class UserEntity {
  constructor(
    private readonly _id: TUserEntityId,
    private readonly _name: UserNameEntity,
  ) {}

  static createWithId(
    id: TUserEntityId,
    name: UserNameEntity,
  ) {
    return new UserEntity(
      id,
      name
    );
  }

  static createWithoutId(
    name: UserNameEntity
  ) {
    return new UserEntity(
      randomUUID(),
      name
    );
  }

  public get name(): UserNameEntity {
    return this._name;
  }

  public get id(): TUserEntityId {
    return this._id;
  }
}

