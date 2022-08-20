"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_express_utils_1 = require("inversify-express-utils");
const express = __importStar(require("express"));
const inversify_1 = require("inversify");
const review_container_1 = require("../src/modules/review/review.container");
const logger_1 = require("../pkg/logger");
const config_1 = require("../pkg/config");
const db_1 = require("../pkg/db");
const morgan_1 = __importDefault(require("morgan"));
const express_1 = require("express");
const swagger = __importStar(require("swagger-express-ts"));
function bootstrap() {
    const container = new inversify_1.Container();
    container.bind(logger_1.Logger).toDynamicValue(() => new logger_1.Logger());
    container.bind(config_1.Config).toDynamicValue(() => new config_1.Config('localhost', 5432, 'reviews', 'root', 'root', false));
    container.bind(db_1.DataBase).toDynamicValue((ctx) => {
        const db = new db_1.DataBase(ctx.container.get(config_1.Config), ctx.container.get(logger_1.Logger));
        Promise.resolve(db.connect());
        return db;
    });
    container.load(new review_container_1.ReviewContainer());
    return container;
}
const container = bootstrap();
const server = new inversify_express_utils_1.InversifyExpressServer(container, null, { 'rootPath': '/api' });
server.setConfig((app) => {
    const logger = (0, morgan_1.default)('combined');
    app.use(logger);
    app.use((0, express_1.urlencoded)({
        'limit': '10mb',
        'extended': true,
    }));
    app.use((0, express_1.json)({
        'limit': '10mb',
    }));
    app.use('/swagger', express.static('swagger'));
    app.use('/swagger/assets', express.static('node_modules/swagger-ui-dist'));
    app.use(swagger.express({
        definition: {
            info: {
                title: "Reviews API",
                version: "1.0"
            },
            // Models can be defined here
        }
    }));
});
server.setErrorConfig((app) => {
    //@ts-ignore
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });
});
const app = server.build();
app.listen({ port: 3000 }, () => { });
//# sourceMappingURL=app.js.map