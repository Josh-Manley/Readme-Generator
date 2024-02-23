// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'title',
      message: 'What is title of readme?',
      name: 'title'
    },
    {
      type: 'input',
      message: 'Description',
      name: 'description'
    },
    // table of contents
    {
      type: 'input',
      message: 'Installation',
      name: 'installation'
    },
    {
      type: 'input',
      message: 'Usage',
      name: 'usage'
    },
    {
      type: 'list',
      message: 'Choose License',
      choices: ['MIT', 'Apache License 2.0', 'The Unlicense'],
      name: 'license'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log('Error:', err);
    } else {
      console.log('Complete');
    }
  }
)}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
  const markdownContent = generateMarkdown.generateMarkdown(answers);
  writeToFile('README.md', markdownContent)
});
}

// Function call to initialize app
init();