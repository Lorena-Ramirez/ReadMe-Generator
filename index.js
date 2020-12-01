const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is a description of you project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions for your project? ',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What usage information should a user know about your project?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are the test instuctions',
    },
    // {
    //     type: 'input',
    //     name: 'license',
    //     message: 'Please choose a license',
    // },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
  ]);

  
  promptUser()
  .then((answers) => console.log(`${answers.title}`));
  