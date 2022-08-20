"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleReviewDto = void 0;
const review_title_entity_1 = require("../../domain/review/review-title/review-title.entity");
const review_entity_1 = require("../../domain/review/review.entity");
const create_review_dto_1 = require("./create-review.dto");
class SingleReviewDto {
    static fromDomain(domain) {
        const result = new create_review_dto_1.CreateReviewDto();
        result.id = domain.id;
        result.title = domain.title.value;
        return result;
    }
    static toDomain(dto) {
        return new review_entity_1.ReviewEntity(dto.id, new review_title_entity_1.ReviewTitleEntity(dto.title));
    }
}
exports.SingleReviewDto = SingleReviewDto;
//# sourceMappingURL=single-review.dto.js.map