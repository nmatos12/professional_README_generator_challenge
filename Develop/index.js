// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
//commented this out () => inquirer.prompt(
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Write any installation your project requires if applicable',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Show any functionalities of your project if applicable',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List resources and credit sources that you may have used if applicable',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['MIT', 'APACHE2.0', 'Boost1.0', 'MPL2.0', 'BSD2', 'BSD3', 'No license'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) =>{
        //console.log('Starting README');
        writeToFile('README.md',generateMarkdown({...inquirerResponses}));
    })
}

// Function call to initialize app
init();
