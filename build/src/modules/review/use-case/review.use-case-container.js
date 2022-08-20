"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUseCaseContainer = void 0;
const inversify_1 = require("inversify");
const review_repository_1 = require("../repository/review/review.repository");
const review_use_case_1 = require("./review/review.use-case");
class ReviewUseCaseContainer extends inversify_1.ContainerModule {
    constructor() {
        super((bind) => {
            bind(review_use_case_1.ReviewUseCaseSymbol).toDynamicValue((ctx) => {
                return new review_use_case_1.ReviewUseCase(ctx.container.get(review_repository_1.ReviewRepositorySymbol));
            }).inSingletonScope();
        });
    }
}
exports.ReviewUseCaseContainer = ReviewUseCaseContainer;
