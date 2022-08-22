import { randomUUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export const UserDaoEntitySymbol = Symbol.for('UserDaoEntity')

export type TUserDaoEntityId = ReturnType<typeof randomUUID>

@Entity()
export class UserDaoEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: TUserDaoEntityId

  @Column('text')
  name!: string
}
