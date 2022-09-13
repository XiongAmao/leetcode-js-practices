import inquirer from 'inquirer';
import { createDir, createReadme, createTemplate } from './helpers';

interface Answers {
  id: string;
  zh: string;
  en: string;
  url: string;
}

const run = async () => {
  const ans = await inquirer
    .prompt<Answers>([
      {
        type: 'input',
        name: 'id',
        message: 'enter problem id:',
        validate: (input) => {
          return true;
        }
      },
      {
        type: 'input',
        name: 'zh',
        message: 'enter chinese title:'
      },
      {
        type: 'input',
        name: 'en',
        message: 'enter english title:'
      },
      {
        type: 'input',
        name: 'url',
        message: 'url:'
      }
    ])
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });

  const { id, zh, en, url } = ans;

  await createDir();
  await createReadme();
  await createTemplate();

  console.log('create successfully!');
};

run();
