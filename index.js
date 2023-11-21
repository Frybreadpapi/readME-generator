// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please give a name for the Project.",
      },
      {
        type: "input",
        name: "description",
        message: "Please describe the functions and motivation for this project.",
      },
      {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3"],
      },
      {
        type: "input",
        name: "usage",
        message:
          "State the languages or technologies associated with this project.",
      },
      {
        type: "input",
        name: "github",
        message: "List your GitHub username.",
      },
      {
        type: "input",
        name: "email",
        message: "Please list your email address.",
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
