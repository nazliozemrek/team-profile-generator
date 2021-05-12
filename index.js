const inquirer = require('inquirer');

inquirer
.prompt({
  type: 'text',
  name: 'name',
  message: 'What is your name?'
})