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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRepositoryImpl = exports.ReviewRepositorySymbol = void 0;
const inversify_1 = require("inversify");
const generic_repository_1 = require("../../../../../pkg/generic-repository");
const review_dao_1 = require("../../../../entities/dao/review/postgres/review.dao");
const review_dao_mapper_1 = require("../../../../entities/dao/review/postgres/review.dao-mapper");
exports.ReviewRepositorySymbol = Symbol.for('ReviewRepository');
let ReviewRepositoryImpl = class ReviewRepositoryImpl extends generic_repository_1.GenericRepository {
    constructor(repository) {
        super(repository, new review_dao_mapper_1.ReviewEntityMapper());
    }
    countAll() {
        return this.repository.count();
    }
};
ReviewRepositoryImpl = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(review_dao_1.ReviewDaoEntitySymbol))
], ReviewRepositoryImpl);
exports.ReviewRepositoryImpl = ReviewRepositoryImpl;
//# sourceMappingURL=review.repository.js.map