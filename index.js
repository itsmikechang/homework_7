//modules list
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//create required criterias for README
function init() {
    inquirer.prompt([
    {
        message: "What's your project's name?",
        name: "title",
        type: "input"
    },
    {
        message: "That's a nice name buddy, how bout a sweet description to go with it.",
        name: "description",
        type: "input"
    },
    {
        message: "So how do we get this thang running?",
        name: "installation",
        type: "input"
    },
    {
        message: "What's this thing do and whatsit for?",
        name: "usage",
        type: "input"
    },
    {
        message: "Please choose license for the application.",
        name: "license",
        type: "list",
        choices: [
            {
                name: "MIT",
                value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            },
            {
                name: "BSD", 
                value: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)" 
            },
            { 
                name: "Apache License 2.0", 
                value: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" 
            }
        ]
    },
    {
        message: "Shoutouts go here big fella",
        name: "contributors",
        type: "input"
    },
    {
        message: "Test, test, testing. 1, 2, 3. Uno, Dos, Tres. How do you test this thing?",
        name: "tests",
        type: "input",
    },
    {
        message: "What's that email so people can hit you up for preguntas.",
        name: "questions",
        type: "input",
    },
    {
        message: "What's that Github account name playa.",
        name: "username",
        type: "input",
    }
]) .then((answers) => {
    writeToFile("README.md", answers);
        })
};

//create function to write file on the README.md file
async function writeToFile(fileName, answers) {
    fs.writeFile(fileName, generateMarkdown(answers), function(err) {
        if (err) {
            throw (err);  
        }
        else console.log("wow, now thats a nice readme you got there big boy.");
    })
};

init()

