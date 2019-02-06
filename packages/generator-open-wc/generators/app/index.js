/* eslint-disable no-console */

const Generator = require('yeoman-generator');
const inquirer = require('inquirer');

const choices = {
  appStarter: 'Create Open Webcomponents Starter App',
  appProduction:
    'Create Open Webcomponents Production Ready App Setup (if you feel lost use the Starter App first)',
  separator1: new inquirer.Separator(),
  wcVanilla: 'Create a vanilla webcomponent following the Open Webcomponents recommendations',
  wcUpgrade: 'Upgrade my existing webcomponent to use the Open Webcomponents recommendations',
  separator2: new inquirer.Separator(),
  nothing: 'Nah, I am fine thx => exit',
};

module.exports = class GeneratorApp extends Generator {
  async prompting() {
    console.log('');
    console.log('Welcome to Open Webcomponents:');
    console.log('');

    this.answers = await this.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do today?',
        choices: Object.values(choices),
      },
    ]);

    switch (this.answers.action) {
      case choices.appStarter:
        this.composeWith(require.resolve('../starter-app'), this.config.getAll());
        break;
      case choices.appProduction:
        console.log('I am sorry - this is not yet available');
        console.log('Join the conversion: https://github.com/open-wc/open-wc/issues/197');
        // this.composeWith(require.resolve('../app-production'), this.config.getAll());
        break;
      case choices.wcVanilla:
        this.composeWith(require.resolve('../scaffold-vanilla'), this.config.getAll());
        break;
      case choices.wcUpgrade:
        this.composeWith(require.resolve('../upgrade'), this.config.getAll());
        break;
      case choices.nothing:
        console.log('Ok, bye - see ya next time');
        break;
      default:
        console.log('You should have mad a decision');
    }
  }
};
