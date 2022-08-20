import { DataSource, DataSourceOptions } from 'typeorm';

export class Config {
  constructor(
    private readonly _host: string,
    private readonly _port: number,
    private readonly _database: string,
    private readonly _user: string,
    private readonly _password: string,
    private readonly _ssl: boolean,
    private readonly _entities: string,
    private readonly _migrations: string,
  ) {}

  public get ssl(): boolean {
    return this._ssl;
  }

  public get password(): string {
    return this._password;
  }

  public get user(): string {
    return this._user;
  }

  public get database(): string {
    return this._database;
  }

  public get port(): number {
    return this._port;
  }

  public get host(): string {
    return this._host;
  }

  public get entities(): string {
    return this._entities;
  }

  public get migrations(): string {
    return this._migrations;
  }
}
