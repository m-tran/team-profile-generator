// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

function Engineer(github) {
    this.github = github;
};

Engineer.prototype.getGithub = function() {
    return this.github;
};

Engineer.prototype.getRole = function() {
    return "Engineer";
};

module.exports = Engineer;