const testNumbers = require('../testNumbers.js');
const { assert, expect } = require('chai');
const { sumNumbers } = require('../testNumbers.js');

describe("Unit tests", function () {
    describe("sumNumbers", function () {
        it('Should return undefined if any value is not a number', () => {
            assert.equal(testNumbers.sumNumbers('str', 2), undefined);
            assert.equal(testNumbers.sumNumbers(2, 'str'), undefined);
            assert.equal(testNumbers.sumNumbers('str', 'str'), undefined);
        });
        it('Should return correct result when passing numbers', () => {
            assert.equal(testNumbers.sumNumbers(2, 2), 4);
            assert.equal(testNumbers.sumNumbers(2.2, 3.3), 5.5);
            assert.equal(testNumbers.sumNumbers(-5, 2), -3);
            assert.equal(testNumbers.sumNumbers(-5,-5), -10);
            assert.equal(testNumbers.sumNumbers(3, -4), -1);
        });
    });

    describe("numberChecker", function () {
        it('Should throw an error if input is not a number', () => {
            assert.throw(() => testNumbers.numberChecker('abc'), Error, "The input is not a number!");
            assert.throw(() => testNumbers.numberChecker('abc2'), Error, "The input is not a number!");
            assert.throw(() => testNumbers.numberChecker(undefined), Error, "The input is not a number!");
        });
        it('Should validate if input is even', () => {
            assert.equal(testNumbers.numberChecker(2), 'The number is even!');
        });
        it('Should validate if input is odd', () => {
            assert.equal(testNumbers.numberChecker(3), 'The number is odd!');
        });
    });

    describe("averageSumArray", function () {
        it('Should return correctly average value of an array', () => {
            assert.deepEqual(testNumbers.averageSumArray([1, 2, 3]), 2);
            assert.equal(testNumbers.averageSumArray([1, 2]), 1.5);
        })
    })
})