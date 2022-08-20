"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = void 0;
const path_1 = __importDefault(require("path"));
const typeorm_1 = require("typeorm");
class DataBase {
    constructor(_config, _logger) {
        this._config = _config;
        this._logger = _logger;
        this._connection = new typeorm_1.DataSource({
            type: 'postgres',
            host: this._config.host,
            port: this._config.port,
            database: this._config.database,
            password: this._config.password,
            username: this._config.user,
            logging: true,
            entities: [
                path_1.default.join(__dirname, '../../', 'src/entities/dao/**/postgres/**/*dao.{ts,js}')
            ],
            synchronize: true
        });
    }
    getRepository(model) {
        //@ts-ignore
        return this._connection.getRepository(model);
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._connection.initialize();
        });
    }
    ping() {
        return new Promise((res) => res(true));
    }
}
exports.DataBase = DataBase;
//# sourceMappingURL=index.js.map