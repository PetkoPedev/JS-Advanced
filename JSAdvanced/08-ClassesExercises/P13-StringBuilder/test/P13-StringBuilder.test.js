let { expect } = require('chai');
let StringBuilder = require('../P13-StringBuilder');

describe('Stringbuilder', () => {
    describe('constructor', () => {
        it('Should initialize with empty array if undefinde is passed', () => {
            let sb = new StringBuilder(undefined);
            expect(sb.toString()).to.equal('');
        });

        it('Should throw error if passed a non-string argument', () => {
            expect(() => new StringBuilder(1.23)).to.throw(TypeError);
            expect(() => new StringBuilder(null)).to.throw(TypeError);
        });

        it('Should initialize correct array when passed a valid string', () => {
            let sb1 = new StringBuilder('abv');
            let sb2 = new StringBuilder('test');
            expect(sb1.toString()).to.equal('abv');
            expect(sb2.toString()).to.equal('test');
        });
    });

    describe('append', () => {
        it('Should throw when passed a non-string argument', () => {
            let sb1 = new StringBuilder();
            expect(() => sb1.append(true)).to.throw(TypeError);
            let sb2 = new StringBuilder('abc');
            expect(() => sb2.append(123)).to.throw(TypeError);
        });

        it('Should append string correctly when passed a string argument', () => {
            let input = '123';
            let input2 = 'wow';
            let expected = 'abc123';
            let expected2 = 'abc123wow';
            let sb = new StringBuilder('abc');
            sb.append(input);
            expect(sb.toString()).to.equal(expected);
            sb.append(input2);
            expect(sb.toString()).to.equal(expected2);
        });

        it('Should append only the string chars when passed a string argument', () => {
            let input = '123';
            let input2 = 'wow';
            let expected = 'abc123';
            let expected2 = 'abc123wow';
            let expected3 = 'abc123ww';
            let sb = new StringBuilder('abc');
            sb.append(input);
            expect(sb.toString()).to.equal(expected);
            sb.append(input2);
            expect(sb.toString()).to.equal(expected2);
            sb.remove(7, 1);
            expect(sb.toString()).to.equal(expected3);
        });
    });

    describe('prepend', () => {
        it('Should throw when passed a non-string argument', () => {
            let sb1 = new StringBuilder();
            expect(() => sb1.prepend(true)).to.throw(TypeError);
            let sb2 = new StringBuilder('abc');
            expect(() => sb2.prepend(123)).to.throw(TypeError);
        });

        it('Should prepend string correctly when passed a string argument', () => {
            let input = '123';
            let input2 = 'wow';
            let expected = '123abc';
            let expected2 = 'wow123abc';
            let sb = new StringBuilder('abc');
            sb.prepend(input);
            expect(sb.toString()).to.equal(expected);
            sb.prepend(input2);
            expect(sb.toString()).to.equal(expected2);
        });

        it('Should prepend chars at correct index correctly when passed a string argument', () => {
            let input = '123';
            let input2 = 'wow';
            let expected = '123abc';
            let expected2 = 'wow123abc';
            let expected3 = 'wow123bc';
            let sb = new StringBuilder('abc');
            sb.prepend(input);
            expect(sb.toString()).to.equal(expected);
            sb.prepend(input2);
            expect(sb.toString()).to.equal(expected2);
            sb.remove(6, 1);
            expect(sb.toString()).to.equal(expected3);
        });
    });

    describe('insertAt', () => {
        it('Should throw when passed a non-string argument', () => {
            let sb1 = new StringBuilder();
            expect(() => sb1.insertAt(true, 0)).to.throw(TypeError);
            let sb2 = new StringBuilder('abc');
            expect(() => sb2.insertAt(123, 1)).to.throw(TypeError);
        });

        it('Should insert chars at correct index when passed a valid string', () => {
            let input = ' fast';
            let input2 = ' are';
            let expected = 'cars fast';
            let expected2 = 'cars are fast';
            let sb = new StringBuilder('cars');
            sb.insertAt(input, 4);
            expect(sb.toString()).to.equal(expected);
            sb.insertAt(input2, 4);
            expect(sb.toString()).to.equal(expected2);
        });

        it('Should insert chars at correct index when passed a valid string', () => {
            let input = ' fast';
            let input2 = ' are';
            let expected = 'cars fast';
            let expected2 = 'cars are fast';
            let expected3 = 'cars are fat';
            let sb = new StringBuilder('cars');
            sb.insertAt(input, 4);
            expect(sb.toString()).to.equal(expected);
            sb.insertAt(input2, 4);
            expect(sb.toString()).to.equal(expected2);
            sb.remove(11, 1);
            expect(sb.toString()).to.equal(expected3);
        });
    });

    describe('remove', () => {
        it('Should remove chars at correct index', () => {
            let expected = 'cars are fat';
            let expected2 = 'cars fat';
            let sb = new StringBuilder('cars are fast');
            sb.remove(11, 1);
            expect(sb.toString()).to.equal(expected);
            sb.remove(4, 4);
            expect(sb.toString()).to.equal(expected2);
        });
    });

    describe('toString', () => {
        it('Should return correct string representation  of internal array when called', () => {
            let expected = '';
            let expected2 = 'cars are fast';
            let sb = new StringBuilder();
            let sb2 = new StringBuilder('cars are fast');

            expect(sb.toString()).to.equal(expected);
            expect(sb2.toString()).to.equal(expected2);
        });
    });
})