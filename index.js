// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const writeToFile = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
      name: 'project_title',
      message: "What is the title of your project?",
    },
    {
        name: "description",
        message: "What is the description of your project?"
    },
    {
        name: "installation",
        message: "Provide the instructions for installation."
    },
    {
        name: "usage",
        message: "Describe how to use your application."
    },
    {
        name: "license",
        message: "Would you like to add a license?"
    },
    {
        name: "contributing",
        message: "Provide contribution instutructions."
    },
    {
        name: "tests",
        message: "Provide testing instructions."
    },
    {
        name: "questions",
        message: "Provide your email address for user's to ask questions."
    },
    {
        name: "github",
        message: "What is your Github username?"
    },
    {
        name: "email",
        message: "What is your email address?"
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log('Hello Node!');
}

// Function call to initialize app
init();


inquirer
  .prompt(questions)
  .then(answers => {
    console.log("# " + answers['project_title']);
  })
  .catch(error => {
    if(error.isTtyError) {
     
    } else {
      
    }
  });





