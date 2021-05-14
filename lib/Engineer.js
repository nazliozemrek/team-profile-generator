const Employee = require("./Employee.js");

class Engineer extends Employee {
    //extends here is used for manager being child class of Employee

    constructor(name,id,email,github) {
        super(name,id,email);
        // super is used to invoke the parent class method
        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;