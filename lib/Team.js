const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require("../src/generate-markdown");
const { writeFile, copyFile } = require('./utils/generate-markdown');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const { COPYFILE_EXCL } = require('constants');

class Team {
    constructor(){
        this.employees = [];
        this.currentEmployeeRole = "Manager";
    }

    beginApplication() {
        console.log(`
    ==================
    Build Team Profile
    ==================
    `);
    
    this.addNewEmployee(this.currentEmployeeRolle);
    }

    addNewEmployee(employeeRole) {
        inquirer
        .prompt([
                {
                    name: 'name',
                    type: 'input',
                    message: `What is the ${employeeRole}'s (Required)`,
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Enter your name please!');
                            return false;
                        }
                    }
                },
                {
                    name: 'id',
                    type: 'input',
                    message: `What is the ${employeeRole}'s id number? (Required)`,
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Enter your employee id number!');
                            return false;
                        }
                    }
                },
                {
                    name: 'email',
                    type: 'input',
                    message: `What is the ${employeeRole}'s email? (Required)`,
                    // validate: nameInput => {
                    //     if (nameInput) {
                    //         return true;
                    //     } else {
                    //         console.log('Enter your employee email!');
                    //         return false;
                    //     }
                    // }
                },
                {
                    name: 'office number',
                    type: 'input',
                    message: `What is the ${employeeRole}'s office number? (Required)`,
                    when: () => {
                        if (employeeRole === 'Manager') {
                            return true;
                        } else {
                            return false;
                        }
                    }

                },
                {
                    name: 'github',
                    type: 'input',
                    message: `What is the ${employeeRole}'s Github Username? (Required)`,
                    when: () => {
                        if (employeeRole === 'Engineer') {
                            return true;
                        } else {
                            return false;
                        }
                    }
                },
                {
                    name: 'school',
                    type: 'input',
                    message: `What is the ${employeeRole}'s school? (Required)`,
                    when: () => {
                        if (employeeRole === 'Intern') {
                            return true;
                        } else {
                            return false;
                        }
                    }                
                }
            ])
            .then(({name, id, email, officeNumber = "", github = "", school = ""}) => {
                console.log(name, id, email, officeNumber, github, school);
                if (officeNumber) {
                    this.employees.push(new Manager(name, id, email, officeNumberr));
                } else if (github) {
                    this.employees.push(new Engineer(name, id, email, github));
                } else if (school) {
                    this.employees.push(new Intern(name, id, email, school));
                } else {
                    console.log( "Issue adding employee. Start over or quit please.");
                    return this.addMoreOrStop();
                }
                console.table(this.employees);
                this.addMoreOrStop();
            })
    }
    addMoreOrStop() {
        inquirer
        .prompt([
           {
                name: 'input',
                type: 'list',
             messagee: 'What would you like to do?',
                choices: ['Add Engineer', 'Add Intern', 'Generate Team Page', 'Quit' ]
            }    
        ])
        .then(({input}) =>{
            if (input === 'Add Engineer') {
                this.addNewEmployee("Engineer");
            } else if (input === 'Add Intern'){
                this.addNewEmployee("Intern");
            } else if ( input === 'Generate Team Page') {
                this.generateTeamPage();
            } else {
                return;
            }
        })
    }

    generateTeamPage() {
        console.table(this.employees);
        const pageHTML = generatePage(this.employee); 

        writeFile(pageHTML)
            .then(writeeFileResponse => {
                console.log(writeeFileResponse);
                return copyFile();
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = Team;
