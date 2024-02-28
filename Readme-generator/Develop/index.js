// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'title',
      message: 'What is the title of readme?',
      name: 'title'
    },
    {
      type: 'input',
      message: 'Description of Project',
      name: 'description'
    },
    {
      type: 'input',
      message: 'Installation instructions',
      name: 'installation'
    },
    {
      type: 'input',
      message: 'Usage instructions',
      name: 'usage'
    },
    {
      type: 'list',
      message: 'Choose License',
      choices: ['MIT', 'Apache License 2.0', 'The Unlicense'],
      name: 'license'
    },
    {
      type: 'input',
      message: 'Contributing guidelines',
      name: 'contributing'
    },
    {
      type: 'input',
      message: 'Test instructions',
      name: 'tests'
    },
    {
      type: 'input',
      message: 'Github username',
      name: 'username'
    },
    {
      type: 'input',
      message: 'Email address',
      name: 'email'
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

// Create license file
function writeLicenseFile (fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log('Error:', err);
    } else {
      console.log('Complete');
    }
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
  const markdownContent = generateMarkdown.generateMarkdown(answers);
  writeToFile('README.md', markdownContent)
  const licenseContent = generateMarkdown.renderLicenseSection(answers);
  writeLicenseFile('License', licenseContent);
});
}

// Function call to initialize app
init();