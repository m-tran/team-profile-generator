// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

function Manager(officeNumber) {
    this.officeNumber = officeNumber;
};

Manager.prototype.getRole = function() {
    return "Manager";
};

module.exports = Manager;