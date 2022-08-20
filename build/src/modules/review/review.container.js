"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewContainer = void 0;
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const db_1 = require("../../../pkg/db");
const review_dao_1 = require("../../entities/dao/review/postgres/review.dao");
const review_controller_1 = require("./delivery/http/controllers/review/review.controller");
const review_repository_1 = require("./repository/review/review.repository");
const review_use_case_1 = require("./use-case/review/review.use-case");
inversify_1.Container;
class ReviewContainer extends inversify_1.ContainerModule {
    constructor() {
        super((bind) => {
            bind(inversify_express_utils_1.TYPE.Controller)
                .to(review_controller_1.ReviewController).inSingletonScope().whenTargetNamed(review_controller_1.ReviewControllerSymbol);
            bind(review_use_case_1.ReviewUseCaseSymbol).toDynamicValue((ctx) => {
                return new review_use_case_1.ReviewUseCase(ctx.container.get(review_repository_1.ReviewRepositorySymbol));
            }).inSingletonScope();
            bind(review_dao_1.ReviewDaoEntitySymbol).toDynamicValue((ctx) => {
                return ctx.container.get(db_1.DataBase).getRepository(review_dao_1.ReviewDaoEntity);
            });
            bind(review_repository_1.ReviewRepositorySymbol).to(review_repository_1.ReviewRepositoryImpl);
            bind(review_controller_1.ReviewControllerSymbol).to(review_controller_1.ReviewController);
        });
    }
}
exports.ReviewContainer = ReviewContainer;
//# sourceMappingURL=review.container.js.map