"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genMobx = void 0;
const fs_1 = __importDefault(require("fs"));
const enum_1 = require("./enum");
const genMobx = (rl) => {
    rl.question('Enter Mobx generate type\n1. root \n2. store\n3. service\ngenerate type: ', (mobxType) => {
        switch (mobxType) {
            case enum_1.MobxEnum.Root:
                fs_1.default.readFile(`${__dirname}/template/mobx.root.ts`, 'utf8', (err, data) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    fs_1.default.writeFile(`${process.cwd()}/mobx.root.ts`, data, (err) => { });
                });
                break;
            case enum_1.MobxEnum.Store:
                fs_1.default.readFile(`${__dirname}/template/mobx.store.template.ts`, 'utf8', (err, data) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    fs_1.default.writeFile(`${process.cwd()}/mobx.store.ts`, data, (err) => { });
                });
                break;
            case enum_1.MobxEnum.Service:
                fs_1.default.readFile(`${__dirname}/template/mobx.service.template.ts`, 'utf8', (err, data) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    fs_1.default.writeFile(`${process.cwd()}/mobx.service.ts`, data, (err) => { });
                });
                break;
            default:
                console.error('Invalid type');
                break;
        }
        rl.close();
    });
};
exports.genMobx = genMobx;
//# sourceMappingURL=mobx.js.map