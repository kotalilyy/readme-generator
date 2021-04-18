const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const licenseChoices = [
  "GNU General Public License v3.0",
  "MIT",
  "The Unlicense",
];

const questions = [
  {
    name: "title",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    message: "What is the description of your project?",
  },
  {
    name: "installation",
    message: "Provide the instructions for installation.",
  },
  {
    name: "usage",
    message: "Describe how to use your application.",
  },
  {
    type: "list",
    name: "license",
    message: "Would you like to add a license?",
    choices: licenseChoices,
  },
  {
    name: "contributing",
    message: "Provide contribution instutructions.",
  },
  {
    name: "tests",
    message: "Provide testing instructions.",
  },
  {
    name: "questions",
    message: "Provide your email address for user's to ask questions.",
  },
  {
    name: "github",
    message: "What is your Github username?",
  },
  {
    name: "email",
    message: "What is your email address?",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}

inquirer
  .prompt(questions)
  .then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile("generated_README.md", markdown);
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });
