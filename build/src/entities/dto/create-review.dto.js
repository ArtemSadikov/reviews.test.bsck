"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReviewDto = void 0;
class CreateReviewDto {
    static fromDomain(domain) {
        const result = new CreateReviewDto();
        result.id = domain.id;
        return result;
    }
}
exports.CreateReviewDto = CreateReviewDto;
