const Employee = require('../lib/Employee');

describe('Employee' , () => { 

    test('create employee', () => {
        const employee = new Employee('Mikki');
    });
    test('set id', () => {
        const value = 100000;
        const employee = new Employee('Mikki', value);
        expect(employee.id).toBe(value);
    });
    test('set email', () => {
        const value = 'employee@email.com';
        const employee = new Employee('Mikki', 1, value);
        expect(employee.email).toBe(value);
    });
    test('set role', () => {
        const value = 'Employee';
        const employee = new Employee('Mikki', 1, 'employee@email.com');
        expect(employee.getRole()).toBe(value);
    });
})