"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewDeliveryContainer = void 0;
const inversify_1 = require("inversify");
const review_http_container_1 = require("./http/review.http-container");
class ReviewDeliveryContainer extends inversify_1.ContainerModule {
    constructor() {
        super((bind) => {
            bind(review_http_container_1.ReviewHttpModule).toSelf();
        });
    }
}
exports.ReviewDeliveryContainer = ReviewDeliveryContainer;
