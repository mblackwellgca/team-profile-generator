// Requirments needed for application - dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// Locations
const template = require('./src/template.js');
const DIST_DIR = path.resolve(__dirname, 'dist');
const output = path.join(DIST_DIR, 'index.html');

// Constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Creating team member array container
const teamMembers = [];

// Parent function to house child functions
function gitMembers() {

// Manager function
    function gitManager() {
        console.log("Let's build the team profile");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the team manager's name.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's ID?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the team manager's ID.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email address?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the team manager's entire email address.";
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's work phone number? (No spaces or dashes)",
                validate: answer => {
                    let pass = answer.match( /^[1-9]\d*$/ );
                    if (pass) {
                        return true;
                    }
                    return "Please enter the team manager's work phone number. (No spaces or dashes)";
                }
            }
        ])
            .then(answers => {
                const manager = new Manager (
                    answers.managerName,
                    answers.managerId,
                    answers.managerEmail,
                    answers.managerOfficeNumber,
                );
                teamMembers.push(manager);
                addMember();
            });
    }
   // Adding team members function
    function addMember() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Would you like to add another team member?",
                choices: [
                    "Engineer",
                    "Intern",
                    "No more members to add",
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    gitEngineer();
                    break;
                case "Intern":
                    gitIntern();
                    break;
                default:
                    generateHTML();
            }
        });
    }

// Adding Engineer function
    function gitEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the engineer's name.";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's ID?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the engineer's ID.";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email address?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the engineer's entire email address.";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's Github username?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the engineer's github username.";
                }
            }
        ])   
        .then(answers => {
            const engineer = new Engineer (
                answers.engineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerGithub
            );
            teamMembers.push(engineer);
            addMember();
        });    
    }
// Adding Intern function
function gitIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the intern's name.";
            }
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's ID?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the intern's ID.";
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the intern's entire email address.";
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the is the intern's school?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the intern's school.";
            }
        }
    ])   
    .then(answers => {
        const intern = new Intern (
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool,
        );
        teamMembers.push(intern);
        addMember();
    });    
}
function generateHTML() {
    console.log("Building Team Profile!");
    fs.writeFileSync(output, template(teamMembers), "utf-8");
    }
    gitManager();
}
gitMembers();