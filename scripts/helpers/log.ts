import chalk, { Color } from 'chalk';

export const log = (msg: string, color: Color = 'white') =>
  console.log(chalk[color](msg));
export const error = (msg: string) => console.log(chalk.bold.red(msg));
export const warning = (msg: string) => console.log(chalk.hex('#FFA500')(msg));
