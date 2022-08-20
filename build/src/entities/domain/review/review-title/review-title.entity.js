"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewTitleEntity = void 0;
const validate_error_1 = require("../../../../../pkg/errors/validate.error");
const MAX_TITLE_LENGTH = 10;
class ReviewTitleEntity {
    constructor(_value) {
        this._value = _value;
        if (_value.length > 10) {
            throw new validate_error_1.ValidateError("Длина заголовка не должна превышать " + MAX_TITLE_LENGTH);
        }
    }
    get value() {
        return this._value;
    }
}
exports.ReviewTitleEntity = ReviewTitleEntity;
//# sourceMappingURL=review-title.entity.js.map