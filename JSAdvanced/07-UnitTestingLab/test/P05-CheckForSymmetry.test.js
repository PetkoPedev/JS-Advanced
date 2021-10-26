const isSymmetric = require('../P05-CheckForSymmetry');
const { assert, expect, should } = require('chai');

describe('Test isSymmetric functionality', () => {
    it('Should pass when symmetric array is provided', () => {
        let input = [1, 2, 3, 2, 1];
        let expectedResult = true;

        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    });

    it('Should fail when nonsymmetric array is provided', () => {
        let input = [1, 2, 3, 3, 1];
        let expectedResult = false;

        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    });

    it('Should fail when non array is provided as an argument', () => {
        let expectedResult = false;

        assert.equal(isSymmetric(null), expectedResult);
        assert.equal(isSymmetric({}), expectedResult);
        assert.equal(isSymmetric(''), expectedResult);
        assert.equal(isSymmetric(0), expectedResult);
        assert.equal(isSymmetric(true), expectedResult);
        assert.equal(isSymmetric(false), expectedResult);
        assert.equal(isSymmetric(undefined), expectedResult);
    });

    it('Should pass when returning empty array', () => {
        expect(isSymmetric([])).to.be.equal(true);
    });

    it('Should fail', () => {
        let actualResult = isSymmetric(['1', 1]);

        expect(actualResult).to.be.false;
    });
});