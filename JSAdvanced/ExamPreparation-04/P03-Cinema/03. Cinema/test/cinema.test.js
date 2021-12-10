const cinema = require('../cinema.js');
const { assert, expect } = require('chai');

describe('Unit tests', () => {
    describe('showMovies', () => {
        it('Should return message if there are no movies available', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it('Should return list of movies if correct.', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
        });
    });
    describe('ticketPrice', () => {
        it('Should throw error if type is invalid', () => {
            expect(() => cinema.ticketPrice('leage')).to.throw();
            expect(() => cinema.ticketPrice(2)).to.throw();
            expect(() => cinema.ticketPrice('12.00')).to.throw();
        });
        it('Should give valid return if valid type is passed', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
    });
    describe('swapSeatsInHall', () => {
        it('Should return unsuccessful swap of seats message if exchange is not successful', () => {
            expect(cinema.swapSeatsInHall('seat1', 'seat2')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('seat1', null)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(null, 'seat2')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(null, null)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-5, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-5, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-5, 23)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(15, 23)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(15, -23)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-15, -23)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(15, 15)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(15.5, 13)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(15, 15.4)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(15.33, 15.4)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 4)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(4, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(25, 25)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('Should return successful message', () => {
            expect(cinema.swapSeatsInHall(13, 12)).to.equal('Successful change of seats in the hall.');
        })
    })
})