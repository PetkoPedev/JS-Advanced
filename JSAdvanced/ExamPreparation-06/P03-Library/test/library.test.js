const library = require('../library.js');
const { assert  } = require('chai');

describe("Library tests", () => {
    describe("calcPriceOfBook", () => {
        it("Should throw an error if nameBook is not a string", () => {
            assert.throw(() => library.calcPriceOfBook(2, 2), Error, "Invalid input");
            assert.throw(() => library.calcPriceOfBook('abc', 'cvb'), Error, "Invalid input");
            assert.throw(() => library.calcPriceOfBook(20, 'cvb'), Error, "Invalid input");
            assert.throw(() => library.calcPriceOfBook(20, null), Error, "Invalid input");
            assert.throw(() => library.calcPriceOfBook(null, 'cvb'), Error, "Invalid input");
            assert.throw(() => library.calcPriceOfBook(null, null), Error, "Invalid input");
        });
        it('Should return valid price', () => {
            assert.equal(library.calcPriceOfBook('Book', 1999), `Price of Book is 20.00`);
            assert.equal(library.calcPriceOfBook('Book', 1980), `Price of Book is 10.00`);
            assert.equal(library.calcPriceOfBook('Book', 1978), `Price of Book is 10.00`);
        })
    });

    describe("findBook", () => {
        it('Should throw error if there are no books present', () => {
            assert.throw(() => library.findBook([]), Error, 'No books currently available');
        });
        it('Should validate if there are books present', () => {
            assert.deepEqual(library.findBook(['Book1', 'Book2'], 'Book1'), 'We found the book you want.');
        });
        it('Should return a message if there are books present but the one to be found is not present', () => {
            assert.deepEqual(library.findBook(['Book1', 'Book2'], 'Book3'), 'The book you are looking for is not here!');
        });
    });

    describe("arrangeTheBooks", () => {
        it("Should throw an error if the input is incorrect", () => {
            assert.throw(() => library.arrangeTheBooks('num'), Error, 'Invalid input');
            assert.throw(() => library.arrangeTheBooks(null), Error, 'Invalid input');
            assert.throw(() => library.arrangeTheBooks(-5), Error, 'Invalid input');
        });
        it('Should return Great job message if there is space available', () => {
            assert.equal(library.arrangeTheBooks(20), 'Great job, the books are arranged.');
            assert.equal(library.arrangeTheBooks(40), 'Great job, the books are arranged.');
        });
        it('Should return message for insufficient space if there are more books than space', () => {
            assert.equal(library.arrangeTheBooks(41), 'Insufficient space, more shelves need to be purchased.');
        })
    });
    // TODO: …
});
