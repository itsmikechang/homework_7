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
        type: "input",
        default: "Please Enter In Your Project Name"
    },
    {
        message: "That's a nice name buddy, how bout a sweet description to go with it.",
        name: "description",
        type: "input",
        default: "Please Enter In A Description For Your Project"
    },
    {
        message: "So how do we get this thang running?",
        name: "installation",
        type: "input",
        default: "Please Enter In Package Installation Instructions"
    },
    {
        message: "What's this thing do and whatsit for?",
        name: "usage",
        type: "input",
        default: "Please Enter In The Purpose of The Application"
    },
    {
        message: "Choose your fighter!",
        name: "license",
        type: "list",
        default: "Please Select What License You Would Like To Use",
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
        type: "input",
        default: "Please Enter In Contributors To Your Project"
    },
    {
        message: "Test, test, testing. 1, 2, 3. Uno, Dos, Tres. How do you test this thing?",
        name: "tests",
        type: "input",
        default: "Please Enter In Your Testing Method"
    },
    {
        message: "What's that email so people can hit you up for preguntas.",
        name: "questions",
        type: "input",
        default: "Please Type Your Email"
    },
    {
        message: "What's that Github account name playa.",
        name: "username",
        type: "input",
        default: "Please Type Your Github Username"
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

