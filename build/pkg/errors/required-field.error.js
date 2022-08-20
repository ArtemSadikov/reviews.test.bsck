"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredFieldError = void 0;
const validate_error_1 = require("./validate.error");
class RequiredFieldError extends validate_error_1.ValidateError {
    constructor(_field, _message) {
        super(_message);
        this._field = _field;
        this._message = _message;
    }
    get field() {
        return this._field;
    }
}
exports.RequiredFieldError = RequiredFieldError;
//# sourceMappingURL=required-field.error.js.map