"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentsRouter = void 0;
const express_1 = require("express");
const allContents_1 = require("./controllers/allContents");
const contentsRouter = express_1.Router();
exports.contentsRouter = contentsRouter;
contentsRouter.get('/contents', allContents_1.getAllContents);
//# sourceMappingURL=routes.js.map