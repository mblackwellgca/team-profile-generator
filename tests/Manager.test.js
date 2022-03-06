const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('manager office number', () => {
    const value = 100;
    const manager = new Manager ('Tari', 1, 'tari@gmail.com', value);
    expect(manager.officeNumber).toBe(value);
});
test('get role', () => {
    const value = 'Manager';
    const manager = new Manager ('Tari', 1, 'tari@gmail.com', 100);
    expect(manager.getRole()).toBe(value);
});
test('manager office number via getOfficeNumber', () => {
    const value = 100;
    const manager = new Manager ('Tari', 1, 'tari@gmail.com', value);
    expect(manager.officeNumber()).toBe(value);
});
