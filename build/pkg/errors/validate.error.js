"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateError = void 0;
class ValidateError extends Error {
    constructor(message) {
        super();
        Error.captureStackTrace(this);
        this.message = message;
        this.name = 'Validate error';
    }
}
exports.ValidateError = ValidateError;
//# sourceMappingURL=validate.error.js.map