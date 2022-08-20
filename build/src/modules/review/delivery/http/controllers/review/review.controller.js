"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewController = exports.ReviewControllerSymbol = void 0;
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const review_use_case_1 = require("../../../../use-case/review/review.use-case");
const create_review_dto_1 = require("../../../../../../entities/dto/review/create-review.dto");
const single_review_dto_1 = require("../../../../../../entities/dto/review/single-review.dto");
const swagger_express_ts_1 = require("swagger-express-ts");
exports.ReviewControllerSymbol = Symbol.for('ReviewController');
let ReviewController = class ReviewController {
    constructor(_reviewUseCase) {
        this._reviewUseCase = _reviewUseCase;
    }
    getReviewById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const domain = yield this._reviewUseCase.getById(id);
            return single_review_dto_1.SingleReviewDto.fromDomain(domain);
        });
    }
    createReviewById(review) {
        return __awaiter(this, void 0, void 0, function* () {
            const domain = yield this._reviewUseCase.create(create_review_dto_1.CreateReviewDto.toDomain(review));
            return create_review_dto_1.CreateReviewDto.fromDomain(domain);
        });
    }
    getReviewsList() {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
};
__decorate([
    (0, inversify_express_utils_1.httpGet)('/:id'),
    __param(0, (0, inversify_express_utils_1.requestParam)('id'))
], ReviewController.prototype, "getReviewById", null);
__decorate([
    (0, inversify_express_utils_1.httpPost)('/'),
    __param(0, (0, inversify_express_utils_1.requestBody)())
], ReviewController.prototype, "createReviewById", null);
__decorate([
    (0, inversify_express_utils_1.httpGet)('/')
], ReviewController.prototype, "getReviewsList", null);
ReviewController = __decorate([
    (0, swagger_express_ts_1.ApiPath)({
        'path': '/reviews',
        'name': 'Reviews',
        'description': "wow"
    }),
    (0, inversify_express_utils_1.controller)('/reviews'),
    __param(0, (0, inversify_1.inject)(review_use_case_1.ReviewUseCaseSymbol))
], ReviewController);
exports.ReviewController = ReviewController;
//# sourceMappingURL=review.controller.js.map