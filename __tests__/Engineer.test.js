const Engineer = require('../lib/Engineer.js');
const Employee = require('../lib/Employee.js');




test('office number of manager', () => {
 const githubName = 'git@github.com';   
 const employee = new Engineer ('Emre',20,'test@example.com',githubName);
 expect(employee.github).toBe(githubName)
});

test ('getRole() returns "Engineer"',()=> {
    const role="Engineer";
    const employee = new Engineer ('Emre',20,'test@example.com');
    expect(employee.getRole()).toBe(role);
})