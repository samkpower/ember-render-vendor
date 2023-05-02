const path = require('path');
const Funnel = require('broccoli-funnel');

module.exports = function includeEmberElectronDir() {
  return new Funnel(path.join(__dirname, '/..', 'src', 'initializers'), {
    destDir: 'electron-app'
  });
};
