"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
class Config {
    constructor(_host, _port, _database, _user, _password, _ssl) {
        this._host = _host;
        this._port = _port;
        this._database = _database;
        this._user = _user;
        this._password = _password;
        this._ssl = _ssl;
    }
    get ssl() {
        return this._ssl;
    }
    get password() {
        return this._password;
    }
    get user() {
        return this._user;
    }
    get database() {
        return this._database;
    }
    get port() {
        return this._port;
    }
    get host() {
        return this._host;
    }
}
exports.Config = Config;
//# sourceMappingURL=index.js.map