const Generator = require('yeoman-generator');

module.exports = class GeneratorDemoing extends Generator {
  initializing() {
    this.composeWith(require.resolve('../demoing-storybook'), this.config.getAll());
  }
};
