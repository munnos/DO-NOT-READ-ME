// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generatereadme.js");


  // TODO: Create an array of questions for user input
  

const questions = [ {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
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
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "install",
    message: "What steps need to be taken to install the project?",
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

  / TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
