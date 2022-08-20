"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes = ({ reviewController }) => [
    {
        method: 'GET',
        path: '/reviews/:id',
        handler: reviewController.getReviewById
    }
];
exports.default = routes;
//# sourceMappingURL=routes.js.map