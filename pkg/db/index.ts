import path from 'path';
import { DataSource, ObjectLiteral, Repository } from 'typeorm';
import { Config } from '../config';
import { Logger } from '../logger';

export interface IDataBase {
  connect(): Promise<DataSource>
  ping(): Promise<boolean>
  getRepository<T extends ObjectLiteral>(model: T): Repository<T>
}

export class DataBase implements IDataBase {
  private readonly _connection: DataSource

  constructor(
    private readonly _config: Config,
    private readonly _logger: Logger,
  ) {
    this._connection = new DataSource({
      type: 'postgres',
      host: this._config.host,
      port: this._config.port,
      database: this._config.database,
      password: this._config.password,
      username: this._config.user,
      logging: true,
      entities: [
        path.join(__dirname, '../../', 'src/entities/dao/**/postgres/**/*dao.{ts,js}')
      ],
      synchronize: true
    })
  }

  getRepository<T extends ObjectLiteral>(model: T): Repository<T> {
    //@ts-ignore
    return this._connection.getRepository(model);
  }

  async connect(): Promise<DataSource> {
    return this._connection.initialize();
  }

  ping(): Promise<boolean> {
    return new Promise((res) => res(true))
  }

}
