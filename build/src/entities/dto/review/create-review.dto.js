"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReviewDto = void 0;
const review_title_entity_1 = require("../../domain/review/review-title/review-title.entity");
const review_entity_1 = require("../../domain/review/review.entity");
class CreateReviewDto {
    static fromDomain(domain) {
        const result = new CreateReviewDto();
        result.id = domain.id;
        result.title = domain.title.value;
        return result;
    }
    static toDomain(dto) {
        return new review_entity_1.ReviewEntity(dto.id, new review_title_entity_1.ReviewTitleEntity(dto.title));
    }
}
exports.CreateReviewDto = CreateReviewDto;
//# sourceMappingURL=create-review.dto.js.map