#!/usr/bin/env node
import readline from 'readline';
import { ContextApiEnum, ReactEnum } from "./srcs/react/enum";
import { genContextApi } from "./srcs/react/contextapi";
import { genComponent } from "./srcs/react/component";
import { genMobx } from "./srcs/react/mobx";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

enum TemplateType {
  REACT = '1',
  NEXTJS = '2',
}

rl.question('This utility generate template tsx.\nPress ^C at any time to quit\n\nEnter generate type\n1. react\n2. nextjs\ngenerate type: ', (type: string) => {
  if (type === TemplateType.REACT) {
    rl.question('Enter React generate type\n1. ContextApi \n2. Component\n3. ContextApi Root\n', (reactType: string) => {
      switch (reactType) {
        case ReactEnum.ContextApi:
          genContextApi(rl);
          break;
        case ReactEnum.Component:
          genComponent(rl);
          break;
        case ReactEnum.Mobx:
          genMobx(rl);
          break;
        default:
          console.error('Invalid type');
          break;
      }
    });
  }
});
