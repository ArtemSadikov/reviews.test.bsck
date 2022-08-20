"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRepositoryContainer = void 0;
const inversify_1 = require("inversify");
const db_1 = require("../../../../pkg/db");
const review_dao_1 = require("../../../entities/dao/review/postgres/review.dao");
class ReviewRepositoryContainer extends inversify_1.ContainerModule {
    constructor() {
        super((bind) => {
            bind(review_dao_1.ReviewDaoEntitySymbol).toDynamicValue((ctx) => {
                return ctx.container.get(db_1.DataBase).getRepository(review_dao_1.ReviewDaoEntity);
            });
        });
    }
}
exports.ReviewRepositoryContainer = ReviewRepositoryContainer;
