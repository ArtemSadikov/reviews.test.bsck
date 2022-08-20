"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewEntityMapper = void 0;
const review_title_entity_1 = require("../../../domain/review/review-title/review-title.entity");
const review_entity_1 = require("../../../domain/review/review.entity");
const review_dao_1 = require("./review.dao");
class ReviewEntityMapper {
    toDomain(entity) {
        const title = new review_title_entity_1.ReviewTitleEntity(entity.title);
        const result = new review_entity_1.ReviewEntity(entity.id, title);
        return result;
    }
    toEntity(domain) {
        const result = new review_dao_1.ReviewDaoEntity();
        result.id = domain.id;
        result.title = domain.title.value;
        return result;
    }
}
exports.ReviewEntityMapper = ReviewEntityMapper;
//# sourceMappingURL=review.dao-mapper.js.map