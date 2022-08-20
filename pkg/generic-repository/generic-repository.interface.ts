export type GenericId = NonNullable<string>

export interface IGenericRepository<TEntity> {
  getList(): Promise<TEntity[]>
  getById(id: GenericId): Promise<TEntity>
  deleteById(id: GenericId): Promise<TEntity>
  editById(id: GenericId, data: TEntity): Promise<TEntity>
  create(data: TEntity): Promise<TEntity>
}
