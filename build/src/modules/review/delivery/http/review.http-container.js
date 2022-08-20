"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewHttpModule = void 0;
const inversify_1 = require("inversify");
const review_controller_1 = require("./controllers/review/review.controller");
class ReviewHttpModule extends inversify_1.ContainerModule {
    constructor() {
        super((bind) => {
            bind(review_controller_1.ReviewControllerSymbol).to(review_controller_1.ReviewController);
        });
    }
}
exports.ReviewHttpModule = ReviewHttpModule;
