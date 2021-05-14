const Employee = require("./Employee.js");

class Intern extends Employee {
    //extends here is used for manager being child class of Employee

    constructor(name,id,email,school) {
        super(name,id,email);
        // super is used to invoke the parent class method
        this.school = school;
    }

    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;