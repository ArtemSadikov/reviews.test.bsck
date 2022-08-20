import { decorate, injectable, unmanaged } from 'inversify';
import { Repository } from 'typeorm';
import { EntityMapper } from '../entity-mapper';
import { GenericId, IGenericRepository } from './generic-repository.interface';

export class GenericRepository<
    TDomainEntity extends { id: GenericId },
    TDaoEntity extends { id: GenericId }
  > implements IGenericRepository<TDomainEntity> {
  constructor(
    @unmanaged() private readonly _repository: Repository<TDaoEntity>,
    @unmanaged() private readonly _mapper: EntityMapper<TDomainEntity, TDaoEntity>,
  ) {}

  public async getList(): Promise<TDomainEntity[]> {
    const entities = await this._repository.find();
    return entities.map(this._mapper.toDomain)
  }

  public async getById(id: GenericId): Promise<TDomainEntity> {
    // @ts-ignore
    const entity = await this._repository.findOneByOrFail({ id });
    return this._mapper.toDomain(entity);
  }

  public async deleteById(id: GenericId): Promise<TDomainEntity> {
    // @ts-ignore
    const entity = await this._repository.findOneByOrFail({ id });
    // @ts-ignore
    await this._repository.delete({ id });
    return this._mapper.toDomain(entity);
  }

  public async editById(id: GenericId, data: TDomainEntity): Promise<TDomainEntity> {
    const entityData = this._mapper.toEntity(data);
    // @ts-ignore
    await this._repository.update({ id }, entityData);
    // @ts-ignore
    const entity = await this._repository.findOneByOrFail({ id })
    return this._mapper.toDomain(entity);
  }

  public async create(data: TDomainEntity): Promise<TDomainEntity> {
    const entityData = this._mapper.toEntity(data);
    const entity = await this._repository.save(entityData)
    return this._mapper.toDomain(entity)
  }

  get repository() {
    return this._repository
  }
}

decorate(injectable(), GenericRepository)
