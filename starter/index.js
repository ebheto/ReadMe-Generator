const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
      }, 
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a project description',
      },
      {
        type: 'checkbox',
        message: 'What technologies were employed in project?',
        name: 'technologies',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'jQuery', 'Bootstrap', 'Node.js', 'NPM', 'React', 'PHP', 'C', 'Other']
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide informstion on how to install the application',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide information on how the application can be used',
      },
      {
        type: 'list',
        message: 'Please select a license',
        name: 'contact',
        choices: ["Apache License v2.0", "Boost Software Licence 1.0", "BSD 3-Clause License", "BSD 2-Clause License", "Eclipse Public License 1.0", "GNU GPL General Public License v3.0","GNU GPL General Public License v2.0", "IBM Public License Version 1.0", "ISC License", "MIT License", "Mozilla Public License 2.0", "The Unlicence"],
      },
      {
        type: "input",
        message: "What are your contributions guidelines for this project?",
        name: "contributing",
      },
      {
        type: "input",
        message: "Please provide instructions on how to test this application",   
        name: "tests",
      },    
     { type: "input",
       message: "What is your email address?",
       name: "email",
      },
      {
        name: 'github',
        type: 'input',
        message: "What is your github?"
    }
    ];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
