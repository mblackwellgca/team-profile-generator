const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

describe('Engineer', () => {

    test('engineer extend employee', () => {
        const engineer = new Engineer('Tari');
    });
    test('set github', () => {
        const value = GitHubAccount;
        const engineer = new Engineer('Tari', 1, 'tari@gmail.com', value);
        expect(engineer.github).toBe(value);
    });
    test('set new role', () => {
        const value = 'Engineer';
        const engineer = new Engineer('Tari', 1, 'tari@gmail.com', 'tariGitHub');
        expect(engineer.getRole()).toBe(value);
    });
})