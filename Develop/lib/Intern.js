// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

function Intern(school) {
    this.school = school;
};

Intern.prototype.getSchool = function () {
    return this.school;
}

Intern.prototype.getRole = function() {
    return "Intern";
}

module.exports = Intern;
