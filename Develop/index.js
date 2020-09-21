const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "checkbox",
        message: "What do you want to include in the table of contents?",
        name: "Table of Contents",
        choices: [
        `* [Installation](#installation) \n` ,
        `* [Usage](#usage) \n` ,
        `* [testing](#testing) \n` ,
        `* [description](#description) \n` ,
        `* [how to contribute](#how to contribute) \n`
        ]
    },
    {
        type: "input",
        message: "What are the steps required to install your project?  Provide a step-by-step description of how to get the development environment running.",
        name: "Installation"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.  Include screenshots as needed.",
        name: "Usage"
    },
    {
        type: "input",
        message: "List your collaborators, if any, with links to their GitHub profiles."<br>"If you used any third-party assets that require attribution, list the creators with links to their primary web presense in this section."<br>"If you followed tutorials, include links to those here as well.",
        name: "Credits"
    },
    {
        type: "input",
        message: "What is the title of your README?",
        name: "title"
    },
    {
        
    },
    {
        type: "input",
        message: "What do you want to include in the README description?",
        name: "description"
    },
    {
        type: "input",
        message: "How can a user test this?",
        name: "testing"
    }


])

// array of questions for user
// const questions = [

// ];

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
