"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewEntity = void 0;
const crypto_1 = require("crypto");
class ReviewEntity {
    constructor(_id, _title) {
        this._id = _id;
        this._title = _title;
    }
    static createWithId(id, title) {
        return new ReviewEntity(id, title);
    }
    static createWithoutId(title) {
        return new ReviewEntity((0, crypto_1.randomUUID)(), title);
    }
    get title() {
        return this._title;
    }
    get id() {
        return this._id;
    }
}
exports.ReviewEntity = ReviewEntity;
//# sourceMappingURL=review.entity.js.map