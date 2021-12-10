const companyAdministration = require('../companyAdministration.js');
const { assert } = require('chai');

describe("Tests …", function () {
    describe("hiringEmployee", function () {
        it("Should throw error if position is different", () => {
            assert.throw(() => companyAdministration.hiringEmployee('Cleaner'), Error, 'We are not looking for workers for this position.');
        });
        it('Should successfully hire programmer for position', () => {
            assert.equal(companyAdministration.hiringEmployee("peter", 'Programmer', 4), 'peter was successfully hired for the position Programmer.');
            assert.equal(companyAdministration.hiringEmployee("peter", 'Programmer', 3), 'peter was successfully hired for the position Programmer.');
        });
        it('Should not successfully hire a person if not meeting experience requirements.', () => {
            assert.equal(companyAdministration.hiringEmployee('Peter', 'Programmer', 1), 'Peter is not approved for this position.');
            assert.equal(companyAdministration.hiringEmployee('Peter', 'Programmer', 2), 'Peter is not approved for this position.');
        });
    });

    describe('calculateSalary', function () {
        it('Should throw error if hours value is not correct', () => {
            assert.throw(() => companyAdministration.calculateSalary('string'), Error, 'Invalid hours');
            assert.throw(() => companyAdministration.calculateSalary(null), Error, 'Invalid hours');
            assert.throw(() => companyAdministration.calculateSalary(-5), Error, 'Invalid hours');
        });
        it('Should return correct result if hours value is correct', () => {
            assert.equal(companyAdministration.calculateSalary(5), 75);
            assert.equal(companyAdministration.calculateSalary(8), 120);
        });
        it('Should return correct result if hours value is correct and more than 160', () => {
            assert.equal(companyAdministration.calculateSalary(165), 3475);
            assert.equal(companyAdministration.calculateSalary(170), 3550);
        });
    });
    
    describe('firedEmployee', function () {
        it('Should throw error if input is invalid', () => {
            assert.throw(() => companyAdministration.firedEmployee('abv', 'test'), Error, 'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee(null, null), Error, 'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee(null, 1), Error, 'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee(2, null), Error, 'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee(['John', 'Peter'], -5), Error, 'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee(['John', 'Peter'], 3), Error, 'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee(['John', 'Peter'], ['Ivan']), Error, 'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee(['John', 'Peter'], null), Error, 'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee(['John', 'Peter'], 'string'), Error, 'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee(['John', 'Peter'], '8'), Error, 'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee(['John', 'Peter'], NaN), Error, 'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee(null, ['John', 'Peter']), Error, 'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee([], 3), Error, 'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee(5, 3), Error, 'Invalid input');
        });
        it('Should return valid array if values are valid', () => {
            assert.deepEqual(companyAdministration.firedEmployee(['Peter', 'Andrei', 'John'], 1), 'Peter, John');
        })
    })
});
