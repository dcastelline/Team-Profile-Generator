const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { type } = require("os");
const { finished } = require("stream");

// Array to store employee info
const employees = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function profileGenerator() {
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "Team Manager, please enter your first and last name.",
            },
            {
                name: "id",
                type: "input",
                message: "Please enter your employee ID number.",
            },
            {
                name: "email",
                type: "input",
                message: "Please enter your email address.",
            },
            {
                name: "officeNumber",
                type: "input",
                message: "Please enter your office phone number.",
            },
        ])
        .then(data => {
            let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            employees.push(manager);
            addEmplyee();
        });
}

function addEmplyee() {
    inquirer
        .prompt([
            {
                name: "role",
                type: "list",
                message: 'Add another employee or select "Finished".',
                choices: ["Engineer", "Intern", "Finished"],
            },
        ])
        .then(choice => {
            if (choice === "Engineer") {
                addEngineer();
            }
            else if (choice === "Intern") {
                addIntern();
            }
            else {
                finished();
            }
        })
}

function addEngineer() {
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "Please enter your Engineer's first and last name.",
            },
            {
                name: "id",
                type: "input",
                message: "Please enter your Engineer's employee ID number",
            },
            {
                name: "email",
                type: "input",
                message: "Please enter your Engineer's email address",
            },
            {
                name: "github",
                type: "input",
                message: "Please enter your Engineer's GitHub username.",
            },
        ])
        .then(data => {
            let engineer = new Engineer(data.name, data.id, data.email, data.github);
            employees.push(engineer);
            addEmplyee();
        });
}

function addIntern() {
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "Please enter your Intern's first and last name.",
            },
            {
                name: "id",
                type: "input",
                message: "Please enter your Intern's employee ID number.",
            },
            {
                name: "email",
                type: "input",
                message: "Please enter your Intern's email address.",
            },
            {
                name: "school",
                type: "input",
                message: "Please enter your Intern's school name.",
            },
        ])
        .then(data => {
            let intern = new Intern(data.name, data.id, data.email, data.school);
            employees.push(intern);
            addEmplyee();
        });
}

function finished() {
    fs.writeFileSync(outputPath, render(employees));
    console.log("Finished");
}

profileGenerator();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
