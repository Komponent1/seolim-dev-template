"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genComponent = void 0;
const fs_1 = __importDefault(require("fs"));
const template_path = `${__dirname}/../../template/component/component.todo.tsx`;
const genComponent = (rl) => {
    rl.question('Enter Component name: ', (componentName) => {
        fs_1.default.readFile(template_path, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            const result = data.replace(/TODO/g, componentName);
            fs_1.default.writeFile(`${process.cwd()}/component.${componentName}.tsx`, result, (err) => { });
        });
        rl.close();
    });
};
exports.genComponent = genComponent;
//# sourceMappingURL=component.js.map