"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genContextApi = void 0;
const fs_1 = __importDefault(require("fs"));
const enum_1 = require("./enum");
const genContextApi = (rl) => {
    rl.question('Enter Context generate type\n1. root \n2. context\ngenerate type: ', (contextType) => {
        switch (contextType) {
            case enum_1.ContextApiEnum.Root:
                fs_1.default.readFile(`${__dirname}/template/contextapi.root.tsx`, 'utf8', (err, data) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    fs_1.default.writeFile(`${process.cwd()}/contextapi.tsx`, data, (err) => { });
                });
                break;
            case enum_1.ContextApiEnum.Context:
                fs_1.default.readFile(`${__dirname}/template/contextapi.template.tsx`, 'utf8', (err, data) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    fs_1.default.writeFile(`${process.cwd()}/contextapi.tsx`, data, (err) => { });
                });
                break;
            default:
                console.error('Invalid type');
                break;
        }
        rl.close();
    });
};
exports.genContextApi = genContextApi;
//# sourceMappingURL=contextapi.js.map