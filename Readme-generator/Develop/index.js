// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'Title',
      message: 'What is title of readme?',
      name: 'title'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data);
  err ? console.log('error') : console.log('complete');
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
  const markdownContent = generateMarkdown(answers);
  writeToFile('README.md', markdownContent)
});
}

// Function call to initialize app
init();