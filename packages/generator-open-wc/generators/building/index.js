const Generator = require('yeoman-generator');

module.exports = class GeneratorBuilding extends Generator {
  initializing() {
    this.composeWith(require.resolve('../building-webpack'), this.config.getAll());
  }
};
