import readline from 'readline';
import fs from 'fs';

const template_path = `${__dirname}/../../template/component/component.todo.tsx`

export const genComponent = (rl: readline.Interface) => {
  rl.question('Enter Component name: ', (componentName: string) => {
    fs.readFile(template_path, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const result = data.replace(/TODO/g, componentName);
      fs.writeFile(`${process.cwd()}/component.${componentName}.tsx`, result, (err) => {});
    });
    rl.close();
  });
};