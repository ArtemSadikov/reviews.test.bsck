export interface EntityMapper<Domain, Entity> {
  toDomain(entity: Entity): Domain
  toEntity(domain: Domain): Entity
}
