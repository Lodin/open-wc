const Generator = require('yeoman-generator');

module.exports = class GeneratorStarterApp extends Generator {
  initializing() {
    this.composeWith(require.resolve('../building-webpack'), this.config.getAll());
    this.composeWith(require.resolve('../linting'), this.config.getAll());
    this.composeWith(require.resolve('../scaffold-testing'), this.config.getAll());
  }

  writing() {
    const { tagName } = this.config.getAll();

    // extend package.json
    this.fs.extendJSON(
      this.destinationPath('package.json'),
      this.fs.readJSON(this.templatePath('_package.json')),
    );

    // write & rename element app-template
    this.fs.copyTpl(
      this.templatePath('app-template.js'),
      this.destinationPath(`src/${tagName}.js`),
      this.config.getAll(),
    );

    // write everything else
    this.fs.copyTpl(
      this.templatePath('static/**/*'),
      this.destinationPath(),
      this.config.getAll(),
      undefined,
      { globOptions: { dot: true } },
    );
  }
};
