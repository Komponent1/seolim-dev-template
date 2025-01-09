#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const enum_1 = require("./srcs/react/enum");
const contextapi_1 = require("./srcs/react/contextapi");
const component_1 = require("./srcs/react/component");
const mobx_1 = require("./srcs/react/mobx");
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var TemplateType;
(function (TemplateType) {
    TemplateType["REACT"] = "1";
    TemplateType["NEXTJS"] = "2";
})(TemplateType || (TemplateType = {}));
rl.question('This utility generate template tsx.\nPress ^C at any time to quit\n\nEnter generate type\n1. react\n2. nextjs\ngenerate type: ', (type) => {
    if (type === TemplateType.REACT) {
        rl.question('Enter React generate type\n1. ContextApi \n2. Component\n3. ContextApi Root\n', (reactType) => {
            switch (reactType) {
                case enum_1.ReactEnum.ContextApi:
                    (0, contextapi_1.genContextApi)(rl);
                    break;
                case enum_1.ReactEnum.Component:
                    (0, component_1.genComponent)(rl);
                    break;
                case enum_1.ReactEnum.Mobx:
                    (0, mobx_1.genMobx)(rl);
                    break;
                default:
                    console.error('Invalid type');
                    break;
            }
        });
    }
});
//# sourceMappingURL=bin.js.map