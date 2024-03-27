import fs from 'fs';

const getAllHtmlFilesInOneObject = () => {
  const object = {};
  const toCamelCase = (str) => {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  };
  fs.readdirSync('./')
    .filter((file) => {
      const [_, ext] = file.split('.');
      return ext === 'html';
    })
    .map((file) => {
      const key = file.split('.')[0];
      object[toCamelCase(key)] = `./${file}`;
    });
  return object;
};

export default {
  base: '',
  build: {
    rollupOptions: {
      input: getAllHtmlFilesInOneObject(),
    },
  },
};
