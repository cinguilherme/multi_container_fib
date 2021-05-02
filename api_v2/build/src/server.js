"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./contents/routes");
const app = express_1.default();
app.get('/', (req, res) => {
    res.send({ 'hello': 'world' });
});
app.use(routes_1.contentsRouter);
app.listen(3002, () => {
    console.log('server started and listening on port 3002');
});
//# sourceMappingURL=server.js.map