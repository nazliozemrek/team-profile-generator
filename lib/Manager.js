const Employee = require("./Employee.js");

class Manager extends Employee {
    //extends here is used for manager being child class of Employee

    constructor(name,id,email,officeNumber) {
        super(name,id,email);
        // super is used to invoke the parent class method
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;