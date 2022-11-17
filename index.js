const inquirer = require("inquirer");
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Include packages needed for this application


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.'

    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'credits',
        message: "List your collaborators:",
    },
    {
        type: 'list',
        name: 'license',
        message: "What kind of license does your project have?",
        choices: ['MIT', 'Apache', 'GNU']
    },

    {
        type: 'input',
        name: 'test',
        message: 'Go the extra mile and write tests for your application.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },

];



// TODO: Create a function to write README file
function writeToFile(fileName,input) {
    fs.writeFile(fileName, generateMarkdown(input), function (err) {
        if (err) {
            return console.log(err);
        }
    });


}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile("./utils/README.md",answers);

        })

}

// Function call to initialize app
init();