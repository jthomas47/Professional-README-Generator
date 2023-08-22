// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What would you like the description to be?',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'What is the table of contents?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message:'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'what license would you like to use?',
        choices: ['Apache', 'Boost', 'BSD', 'CCO', 'none']
    },
]




const promptUser = () => {
    return inquirer.prompt(
        questions
    );
};









// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('successfully created README.md')
    );
    
 }

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((answers) => {
        //const readMeContent = generateMarkdown(answers);
        const readMeContent = generateMarkdown(answers); 
       writeToFile('README.md', readMeContent);
    });
}

// Function call to initialize app
init();


