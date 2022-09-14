import inquirer from 'inquirer';
import {
  createDir,
  createReadme,
  createTemplate,
  formatURL,
  getDirPath,
  isDirExist
} from './helpers';
import { log, warning } from './helpers/log';

interface Answers {
  id: string;
  cn: string;
  en: string;
  url: string;
  difficulty: string;
}

const run = async () => {
  const ans = await inquirer
    .prompt<Answers>([
      {
        type: 'input',
        name: 'id',
        message: 'enter problem id:'
      },
      {
        type: 'input',
        name: 'cn',
        message: 'enter chinese title of the topic:'
      },
      {
        type: 'input',
        name: 'en',
        message: 'enter english title of the topic:'
      },
      {
        type: 'input',
        name: 'url',
        message: 'enter url:'
      },
      {
        type: 'list',
        name: 'difficulty',
        message: 'please choose the difficulty of the topic:',
        default: 'easy',
        choices: ['easy', 'medium', 'hard']
      }
    ])
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });

  const { id, cn, en, url, difficulty } = ans;

  const dirPath = getDirPath(id, en);
  const hasDir = await isDirExist(dirPath);

  if (hasDir) {
    await createDir(dirPath);

    const { enURL, cnURL } = formatURL(url);

    await createReadme(dirPath, {
      cn,
      en,
      cnURL,
      enURL,
      difficulty
    });
    await createTemplate(dirPath, en, id);
    log('Create successfully!', 'green');
  } else {
    warning('Problem dir already exist.');
  }
};

run();
