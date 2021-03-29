// TODO: Include packages needed for this application
const { prototype } = require('events');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const fileName = 'README.md';

// TODO: Create an array of questions for user input
const questions = [
    {name: 'name', message: "What is your name? "},
    {name: 'email', message:"What is your email address? "},
    {name: 'github', message: "What is your github username? "},
    {name: 'license', message: "What license would you like to use? Choose from: /br Apache, GNU, Mozilla or MIT "},
    {name: 'title', message: "What is the title of your project?"},
    {name: 'description', message: "Enter a description of your project: "},
    {name: 'installation', message: "What are the installation instructions? "},
    {name: 'usage', message: "What are the usage instructions? "},
    {name: 'contribute', message: "Enter Contribution guidelines: "},
    {name: 'tests', message: "Enter test instructions: "}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) throw err;

        console.log('Done');
    });
};

//user input
const userInput = function () {
    inquirer
        .prompt(questions)
        .then(answers => {
            //add license if statement

            writeToFile(fileName, answers);
        });
};

// TODO: Create a function to initialize app
function init() {
    //start program
    userInput();
}

// Function call to initialize app
init();
