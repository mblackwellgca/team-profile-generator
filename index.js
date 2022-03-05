// Requirments needed for application - dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
//const path = require('path');

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
                    answers.namagerName,
                    answers.managerID,
                    answers.managerEmail,
                    answers.managerOfficeNumber,
                );
                teamMembers.push(manager);
                addMember();
            });
    }
    function addMember() {
        
    }








}