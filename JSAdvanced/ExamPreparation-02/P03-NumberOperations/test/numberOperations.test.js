const numberOperations = require('../numberOperations');
const { assert, expect, AssertionError } = require('chai');
const { sumArrays } = require('../numberOperations');

describe("numberOperations", function () {
    describe("powNumber", function () {
        it("Should return correct number to the second power", function () {
            assert.strictEqual(numberOperations.powNumber(3), 9);
            assert.strictEqual(numberOperations.powNumber(1.5), 1.5 * 1.5);
            assert.strictEqual(numberOperations.powNumber(-4), 16);
            assert.strictEqual(numberOperations.powNumber(0), 0);
            assert.isNaN(numberOperations.powNumber(NaN));
        });
    });

    describe("numberChecker", function () {
        it("Should correctly coerce input argument", function () {
            assert.strictEqual(numberOperations.numberChecker('3'), 'The number is lower than 100!');
        });

        it("Should throw when passed an argument that coerces to NaN", function () {
            assert.throw(() => numberOperations.numberChecker('abv'), Error, 'The input is not a number!');
            assert.throw(() => numberOperations.numberChecker(undefined), Error, 'The input is not a number!');
            assert.throw(() => numberOperations.numberChecker('123b'), Error, 'The input is not a number!');
        });

        it("Should return correct string input when argument is a valid number", function () {
            assert.strictEqual(numberOperations.numberChecker('99'), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker('-100'), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker('100'), 'The number is greater or equal to 100!');
            assert.strictEqual(numberOperations.numberChecker('123.51'), 'The number is greater or equal to 100!');
        });
    });

    describe("sumArrays", function () {
        it("Should return an empty array when called with empty arrays", function () {
            assert.deepEqual(numberOperations.sumArrays([], []), []);
        });
        it("Should return an empty array when one parameter is an empty array", function () {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], []), [1, 2, 3]);
            assert.deepEqual(numberOperations.sumArrays([], [1, 2, 3]), [1, 2, 3]);
        });
        it("Should return correct result when both parameters are non empty arrays", function () {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [2, 3, 4]), [3, 5, 7]);
            assert.deepEqual(numberOperations.sumArrays(['a', 'b', 'c'], ['b', 'c', 'd']), ['ab', 'bc', 'cd']);
        });
    });
});
