import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export const ReviewDaoEntitySymbol = Symbol.for('ReviewDaoEntity')

@Entity({ name: 'review' })
export class ReviewDaoEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('text')
  title!: string;
}
