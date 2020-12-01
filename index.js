const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license',
            choices: ["MIT", "GNU GPLv3"],
        },
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
    ]).then((data) => {
        fs.writeFile('README.md', generateMarkdown(data),(err) => err? console.error(err) : console.log("Success!"))})

