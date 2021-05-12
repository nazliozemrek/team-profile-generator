
const inquirer = require('inquirer');
class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
        inquirer
.prompt(
{
  type: 'text',
  name: 'name',
  message: 'What is your name?'
},
{
    type:'input',
    name: 'id',
    message: 'enter your id',
},
{
    type: 'text',
    name: 'email',
    message: 'Enter email'
}
)
    }
    getName() {
    
    }
    getId() {}
    getEmail(){}
    getRole(){
        return console.log('Employee')
    }
}
let employee = new Employee('Kaan',180335,'nazliozemrek@gmail.com')
console.log(employee)