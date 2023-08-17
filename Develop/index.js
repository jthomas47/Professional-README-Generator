// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'What would you like the description to be?', 'What is the table of contents?', 'what are the steps required to install your project?', 'Provide instructions and examples for use.', 'List your collaborators, if any.', 'what license would you like to use?'];

const generateMarkdown = ({title, description, tableOfContents, installation, usage, credits, license}) =>
      `#${title}
      ##${description}
      ##${tableOfContents}
      ##${installation}
      ##${usage}
      ##${credits}
      ##${license}`;



const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'tableOfContents',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'credits',
            message: questions[5],
        },
        {
            type: 'input',
            name: 'license',
            message: questions[6],
        },
    ]);
};

.then((answers) => {
    const readMeContent = generateMarkdown(answers);
    fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('successfully created README.md')
    );
});








// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    promptUser();
 }

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
