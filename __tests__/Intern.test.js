const Intern = require('../lib/Intern.js');
const Employee = require('../lib/Employee.js');




test('school name of Intern', () => {
 const schoolName = 'Istanbul Technical University';   
 const employee = new Intern ('Emre',20,'test@example.com',schoolName);
 expect(employee.school).toBe(schoolName)
});

test ('getRole() returns "Intern"',()=> {
    const role="Intern";
    const employee = new Intern ('Emre',20,'test@example.com');
    expect(employee.getRole()).toBe(role);
})