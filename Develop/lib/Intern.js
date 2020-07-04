// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }
}

Intern.prototype.getSchool = function () {
    return this.school;
}

Intern.prototype.getRole = function() {
    return "Intern";
}

module.exports = Intern;
