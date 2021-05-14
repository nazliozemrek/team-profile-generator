const Employee = require('../lib/Employee.js');

test('Employee object', () => {
    const employee = new Employee ('Emre',20,'test@example.com','Employee');
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.getId()).toEqual(expect.any(Number))
    expect(employee.getEmail()).toBe('test@example.com')

});

test ('getRole() returns "Employee"',()=> {
    const role="Employee";
    const employee = new Employee ('Emre',20,'test@example.com');
    expect(employee.getRole()).toBe(role);
})
