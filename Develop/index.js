const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your README?",
        name: "Title"
    },
    {
        type: "input",
        message: "What do you want to include in the README description?",
        name: "Description"
    },
    {
        type: "checkbox",
        message: "What do you want to include in the table of contents?",
        name: "Toc",
        choices: [
        "[Installation](#installation)" ,
        "[Usage](#usage)",
        "[Credits](#credits)",
        "[Description](#description)",
        "[Title](#title)",
        "[License](#license)",
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
        message: "List your collaborators, if any, with links to their GitHub profiles.<br>If you used any third-party assets that require attribution, list the creators with links to their primary web presense in this section.<br>If you followed tutorials, include links to those here as well.",
        name: "Credits"
    },
    {
        type: "checkbox",
        message: "The last section of a good README is a license.  This lets other developers know what they can and cannot do with your project.  Choose a license.",
        name: "License",
        choices: [
            "Apache 2.0 License",
            "GPL License",
            "MIT License",
            "Public Domain (Unlicensed)"
        ]
    }
]

inquirer.prompt(questions).then(response => {
    console.log(response)
        // This creates the Title
        fs.writeFileSync("README.md", ("# " + response.Title ) + `\n`, function(err) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }
        });
        // This adds the description of the project that the users entered
        fs.appendFileSync("README.md", ("## Description" + `\n` + response.Description ) + `\n`, function(err) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }
        });
        // This adds the table of contents
        fs.appendFileSync("README.md", ("## Table of Contents" + `\n ${response.Toc.join('<br>')} \n`), function(err) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }
        });
        // This creates the installation instructions
        fs.appendFileSync("README.md", ("## Installation" + `\n` + response.Installation) + `\n`, function(err) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }
        });
        // This creates the usage instructions
        fs.appendFileSync("README.md", ("## Usage" + `\n` + response.Usage + `\n`) + `\n`, function(err) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }
        });
        // This creates a sub-header for installation and adds instructions which the user entered
        fs.appendFileSync("README.md", ("## Credits " + `\n` + response.Credits) + `\n`, function(err) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }
        });
        // This creates a sub-header for installation and adds instructions which the user entered
        fs.appendFileSync("README.md", ("## License" + `\n` + response.License) + `\n`, function(err) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }
        });
    });