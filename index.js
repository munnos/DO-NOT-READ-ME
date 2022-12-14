// Package needed for application.
// Require to gain access to enable ability to write file with fs and allow generateMarkdown.js page to access user input saved in the questions array.

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


  // Array of questions for user input. User answers are then displayed in generateMarkdown function found in generateMarkdown.js
  

const questions = [ {
type: "input",
name: "name",
message: "Please enter your full name",
},
{
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a description for the project",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your Github username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of licence should the project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "N/A (This project was not created under license)"],
  },
  {
    type: "input",
    name: "install",
    message: "What steps need to be taken to install the project?",
  },
  {
    type: "input",
    name: "use",
    message: "Describe to a user how to use the project",
  },
  {
    type: "input",
    name: "contribution",
    message: "Who contributed to the project?",
  },
  {
    type: "input",
    name: "test",
    message: "What command is run to test the project?",
  },
  {
    type: "input",
    name: "screenshot",
    message: "please enter a path/URL of a screenshot of the project",
  },];


// Function to initialise application and write file following user completion of question series
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    fs.writeFile("README.md", readmeContent, (err) =>
    err? console.log(err)
    : console.log("Hurra - we have a readme")
    );
  });
  
}

// Function call to initialize app
init();
