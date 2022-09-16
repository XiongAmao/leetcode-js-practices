import { constants } from 'fs';
import { access, mkdir, readFile, writeFile } from 'fs/promises';
import _ from 'lodash';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module path use case
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getRootAbsolutePath = (p: string) => path.resolve(__dirname, '../../', p);

enum FILE_NAME {
  README = 'readme.md',
  INDEX = 'index.ts',
  TEST = 'index.test.ts'
}
const TEMPLATE_PATHS = {
  README: path.resolve(__dirname, `../templates/${FILE_NAME.README}`),
  INDEX: path.resolve(__dirname, `../templates/${FILE_NAME.INDEX}`),
  TEST: path.resolve(__dirname, `../templates/${FILE_NAME.TEST}`)
};

export const toKebabCase = (s: string) =>
  s.toLowerCase().split(' ').join('-').replace(`'`, '');
export const toCamelCase = (s: string) =>
  s
    .toLowerCase()
    .split(' ')
    .map((str) => str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase())
    .join('')
    .replace(`'`, '');

// CN / US sites are acceptable
export const formatURL = (url: string) => {
  const enURL = url.replace('.cn', '.com');
  const cnURL = enURL.replace('.com', '.cn');
  return {
    enURL,
    cnURL
  };
};

export const getDirPath = (id: string, enTitle: string): string => {
  return getRootAbsolutePath(`./problems/${id}-${toKebabCase(enTitle)}`);
};

export const isDirExist = async (path: string) => {
  try {
    await access(path, constants.R_OK);
    return false;
  } catch (err) {
    return true;
  }
};

export const createDir = async (dirPath: string) => mkdir(dirPath);

export const createReadme = async (
  dirPath: string,
  info: {
    cn: string;
    en: string;
    difficulty: string;
    cnURL: string;
    enURL: string;
  }
) => {
  const data = await readFile(TEMPLATE_PATHS.README);

  const compiled = _.template(data.toString());
  const content = compiled(info);
  writeFile(path.resolve(dirPath, FILE_NAME.README), content);
};

export const createTemplate = async (
  dirPath: string,
  en: string,
  id: string
) => {
  // TODO: rename
  const funcName = `func`;
  const title = `${id} ${en}`;

  const indexData = await readFile(TEMPLATE_PATHS.INDEX);
  const testData = await readFile(TEMPLATE_PATHS.TEST);

  const indexContent = _.template(indexData.toString())({ funcName });
  const testContent = _.template(testData.toString())({ funcName, title });

  writeFile(path.resolve(dirPath, FILE_NAME.INDEX), indexContent);
  writeFile(path.resolve(dirPath, FILE_NAME.TEST), testContent);
};
