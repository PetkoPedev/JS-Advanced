const lookupChar = require('../P03-CharLookup');
const { expect, assert } = require('chai');

describe('lookupChar', () => {
    it('Should return undefined when first parameter is not a string', () => {
        expect(lookupChar(undefined, 1)).to.equal(undefined);
        expect(lookupChar(1, 1)).to.equal(undefined);
    });

    it('Should return undefined when second parameter is not a string', () => {
        expect(lookupChar('some', undefined)).to.equal(undefined);
        expect(lookupChar('some', null)).to.equal(undefined);
        expect(lookupChar('some', 1.23)).to.equal(undefined);
        expect(lookupChar('some', '1')).to.equal(undefined);
    });

    it('Should return "Incorrect index" when second parameter is not within index range', () => {
        expect(lookupChar('some', -1)).to.equal("Incorrect index");
        expect(lookupChar('some', 4)).to.equal("Incorrect index");
    });

    it('Should return correct char when both parameters are valid', () => {
        expect(lookupChar('other', 0)).to.equal('o');
        expect(lookupChar('other', 3)).to.equal('e');
    });
});