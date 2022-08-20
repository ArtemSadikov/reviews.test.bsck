"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidDataError = void 0;
class InvalidDataError extends Error {
    constructor(_message) {
        super();
        this._message = _message;
        Error.captureStackTrace(this);
    }
    get message() {
        return this._message;
    }
}
exports.InvalidDataError = InvalidDataError;
//# sourceMappingURL=Invalid-data.error.js.map