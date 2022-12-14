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
exports.GenericRepository = void 0;
const inversify_1 = require("inversify");
let GenericRepository = class GenericRepository {
    constructor(_repository, _mapper) {
        this._repository = _repository;
        this._mapper = _mapper;
    }
    getList() {
        return __awaiter(this, void 0, void 0, function* () {
            const entities = yield this._repository.find();
            return entities.map(this._mapper.toDomain);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            const entity = yield this._repository.findOneByOrFail({ id });
            return this._mapper.toDomain(entity);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            const entity = yield this._repository.findOneByOrFail({ id });
            // @ts-ignore
            yield this._repository.delete({ id });
            return this._mapper.toDomain(entity);
        });
    }
    editById(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const entityData = this._mapper.toEntity(data);
            // @ts-ignore
            yield this._repository.update({ id }, entityData);
            // @ts-ignore
            const entity = yield this._repository.findOneByOrFail({ id });
            return this._mapper.toDomain(entity);
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const entityData = this._mapper.toEntity(data);
            const entity = yield this._repository.save(entityData);
            return this._mapper.toDomain(entity);
        });
    }
    get repository() {
        return this._repository;
    }
};
GenericRepository = __decorate([
    __param(0, (0, inversify_1.unmanaged)()),
    __param(1, (0, inversify_1.unmanaged)())
], GenericRepository);
exports.GenericRepository = GenericRepository;
(0, inversify_1.decorate)((0, inversify_1.injectable)(), GenericRepository);
//# sourceMappingURL=index.js.map