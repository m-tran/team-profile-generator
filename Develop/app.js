const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let team = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const createTeam = () => {

    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the employee's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "email",
        },
        {
            type: "list",
            message: "What is the employee's role?",
            name: "role",
            choices: (["Manager", "Engineer", "Intern"]),
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber",
            when: function (input) {
                return input.role === "Manager"; 
            }
        },
        {
            type: "input",
            message: "What is the engineer's GitHub username?",
            name: "github",
            when: function (input) {
                return input.role === "Engineer";
            }
        },
        {
            type: "input",
            message: "What is the intern's school?",
            name: "school",
            when: function (input) {
                return input.role === "Intern";
            }
        },
        {
            type: "list",
            message: "Would you like to add more team members?",
            name: "again",
            choices: (["yes", "no"]),
        },
    ]).then((input) => {
        switch(input.role) {
            case "Manager":
                team.push(new Manager(input.name, input.id, input.role, input.officeNumber));
                break;
            case "Engineer":
                team.push(new Manager(input.name, input.id, input.role, input.github));
                break;
            case "Intern":
            team.push(new Manager(input.name, input.id, input.role, input.school));
            break;
        }
        if (input.again === "yes") {
            return createTeam();
        }
        data = render(team);
        fs.writeFileSync(outputPath, data, (err) => {
            if (err) throw err;
            console.log("Team Page has been rendered");
        })
        console.log("success");
    })
    .catch((err) => {
        console.log(err);
    });

};

createTeam();


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
