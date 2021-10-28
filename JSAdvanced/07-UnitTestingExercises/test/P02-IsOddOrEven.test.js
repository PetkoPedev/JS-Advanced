const { expect } = require('chai');
const isOddOrEven = require('../P02-IsOddOrEven');

describe('Test', () => {
    it('Some Undefined test', () => {
        expect(isOddOrEven(undefined)).to.equal(undefined);
        expect(isOddOrEven(null)).to.equal(undefined);
        expect(isOddOrEven(1)).to.equal(undefined);
        expect(isOddOrEven(true)).to.equal(undefined);
    });

    it('Should return even with even string', () => {
        expect(isOddOrEven('some')).to.equal('even');
        expect(isOddOrEven('or')).to.equal('even');
    });

    it('should return odd with odd string', () => {
        expect(isOddOrEven('odd')).to.equal('odd');
        expect(isOddOrEven('hello')).to.equal('odd');
    })
})