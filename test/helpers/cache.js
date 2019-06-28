const fs = require('fs');
const path = require('path');

const cacheDirPath = path.resolve(__dirname, '../../node_modules/.cache/');
const cacheFilePath = path.resolve(cacheDirPath, 'leetcode-cache.json');

const writeCacheFile = (data = {}) => {
  fs.writeFileSync(cacheFilePath, JSON.stringify(data));
};

const getCache = () => {
  if (fs.existsSync(cacheDirPath) && fs.existsSync(cacheFilePath)) {
    const data = fs.readFileSync(cacheFilePath, { encoding: 'utf8' });

    return JSON.parse(data);
  } else {
    return false;
  }
};

const createCacheDir = () => {
  if (!fs.existsSync(cacheDirPath)) {
    try {
      fs.mkdirSync(cacheDirPath);
    } catch (error) {
      console.log(error);
    }
  }
};

const saveCache = (data) => {
  createCacheDir();
  writeCacheFile(data);
};

module.exports = {
  getCache,
  saveCache
};
