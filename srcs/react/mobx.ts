import readline from 'readline';
import fs from 'fs';
import { MobxEnum } from "./enum";

export const genMobx = (rl: readline.Interface) => {
  rl.question('Enter Mobx generate type\n1. root \n2. store\n3. service\ngenerate type: ', (mobxType: string) => {
    switch (mobxType) {
      case MobxEnum.Root:
        fs.readFile(`${__dirname}/template/mobx.root.ts`, 'utf8', (err, data) => {
          if (err) {
            console.error(err);
            return;
          }
          fs.writeFile(`${process.cwd()}/mobx.root.ts`, data, (err) => {});
        });
        break;
      case MobxEnum.Store:
        fs.readFile(`${__dirname}/template/mobx.store.template.ts`, 'utf8', (err, data) => {
          if (err) {
            console.error(err);
            return;
          }
          fs.writeFile(`${process.cwd()}/mobx.store.ts`, data, (err) => {});
        });
        break;
      case MobxEnum.Service:
        fs.readFile(`${__dirname}/template/mobx.service.template.ts`, 'utf8', (err, data) => {
          if (err) {
            console.error(err);
            return;
          }
          fs.writeFile(`${process.cwd()}/mobx.service.ts`, data, (err) => {});
        });
        break;
      default:
        console.error('Invalid type');
        break;
    }
    rl.close();
  });
}