// TODO: Write code to define and export the Employee class
var Employee = function(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
};

Employee.prototype.getName = function() {
    returns(this.name);
};

Employee.prototype.getId = function() {
    returns(this.id);
};

Employee.prototype.getEmail = function() {
    returns(this.email);
};

Employee.prototype.getRole = function() {
    returns("Employee");
};

module.exports = Employee; 