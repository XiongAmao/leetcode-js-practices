const fs = require('fs');
const path = require('path');

const cacheDirPath = path.resolve(__dirname, '../../.cache/');
const cacheFilePath = path.resolve(cacheDirPath, 'cache.json');

const writeCacheFile = (data = {}) => {
  fs.writeFileSync(cacheFilePath, JSON.stringify(data));
}

const getCache = () => {
  if (fs.existsSync(cacheDirPath) && fs.existsSync(cacheFilePath)) {
    const data = fs.readFileSync(cacheFilePath, {encoding: 'utf8'});

    return JSON.parse(data);
  } else {
    return false;
  }
}

const saveCache = (data) => {
  try {
    fs.mkdirSync(cacheDirPath);
  } catch (error) {}
  writeCacheFile(data);
}

const parse = () => {

}

module.exports = {
  getCache,
  saveCache
}
