const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js');




test('office number of manager', () => {
 const officeNumber = '100';   
 const employee = new Manager ('Emre',20,'test@example.com',officeNumber);
 expect(employee.officeNumber).toBe(officeNumber)
});

test ('getRole() returns "Manager"',()=> {
    const role="Manager";
    const employee = new Manager ('Emre',20,'test@example.com');
    expect(employee.getRole()).toBe(role);
})
