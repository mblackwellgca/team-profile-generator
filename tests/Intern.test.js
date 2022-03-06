const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test('set school', () => {
    const value = 'GCA';
    const intern = new Intern ('Tari', 1, 'tari@gmail.com', value);
    expect(intern.school).toBe(value);
});
test('get role', () => {
    const value = 'Intern';
    const intern = new Intern ('Tari', 1, 'tari@gmail.com', 'GCA');
    expect(intern.getRole()).toBe(value);
});
test('intern via getSchool', () => {
    const value = 'GCA';
    const intern = new Intern ('Tari', 1, 'tari@gmail.com', value);
    expect(intern.getSchool()).toBe(value);
});
