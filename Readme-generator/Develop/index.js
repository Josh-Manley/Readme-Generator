// TODO: Include packages needed for this application
const markdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
  inquirer
    .prompt({
      type: 'Title',
      message: 'What is title of readme?',
      name: 'title'
    },

      
    )
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  FileSystem.writeFile('README.md',)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
