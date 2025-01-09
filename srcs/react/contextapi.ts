import readline from 'readline';
import fs from 'fs';
import { ContextApiEnum } from "./enum";

export const genContextApi = (rl: readline.Interface) => {
  rl.question('Enter Context generate type\n1. root \n2. context\ngenerate type: ', (contextType: string) => {
    switch (contextType) {
      case ContextApiEnum.Root:
        fs.readFile(`${__dirname}/template/contextapi.root.tsx`, 'utf8', (err, data) => {
          if (err) {
            console.error(err);
            return;
          }
          fs.writeFile(`${process.cwd()}/contextapi.tsx`, data, (err) => {});
        });
        break;
      case ContextApiEnum.Context:
        fs.readFile(`${__dirname}/template/contextapi.template.tsx`, 'utf8', (err, data) => {
          if (err) {
            console.error(err);
            return;
          }
          fs.writeFile(`${process.cwd()}/contextapi.tsx`, data, (err) => {});
        });
        break;
      default:
        console.error('Invalid type');
        break;
    }
    rl.close();
  });
};
