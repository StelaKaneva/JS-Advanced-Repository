const cinema = require('./cinema');
const {expect} = require('chai');

describe('Cinema Checker', () => {
    describe('showMovies', () => {
        it('Returns message if input is empty array', () => {
            expect(cinema.showMovies([])).to.equal("There are currently no movies to show.");
        });

        it('Works as expected with correct input', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
        });

        it('Works correct with single movie', () => {
            expect(cinema.showMovies(['King Kong'])).to.equal('King Kong');
        });
    });

    describe('ticketPrice', () => {
        it('Returns 12.00 if type is Premiere', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
        });
        it('Returns 7.50 if type is Normal', () => {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
        });
        it('Returns 5.50 if type is Discount', () => {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
        it('Twrows error if type is not presented in the schedule', () => {
            expect(() => cinema.ticketPrice('Weekend')).to.throw("Invalid projection type.");
        });
        it('Twrows error if type is null', () => {
            expect(() => cinema.ticketPrice(null)).to.throw();
        });
        it('Twrows error if type is undefined', () => {
            expect(() => cinema.ticketPrice(undefined)).to.throw();
        });
        it('Twrows error if type is empty string', () => {
            expect(() => cinema.ticketPrice('')).to.throw();
        });

    });

    describe('swapSeatsInHall', () => {
        it('Returns Unsuccessful with floating point', () => {
            expect(cinema.swapSeatsInHall(4, 5.5)).to.contain('Unsuccessful');
            expect(cinema.swapSeatsInHall(5.5, 4)).to.contain('Unsuccessful');
            expect(cinema.swapSeatsInHall(4.5, 5.5)).to.contain('Unsuccessful');
        });

        it('Returns Unsuccessful if input is less than or equal to zero', () => {
            expect(cinema.swapSeatsInHall(-4, 5)).to.contain('Unsuccessful');
            expect(cinema.swapSeatsInHall(5, -4)).to.contain('Unsuccessful');
            expect(cinema.swapSeatsInHall(-4, -5)).to.contain('Unsuccessful');
            expect(cinema.swapSeatsInHall(-4, 0)).to.contain('Unsuccessful');
            expect(cinema.swapSeatsInHall(0, -5)).to.contain('Unsuccessful');
            expect(cinema.swapSeatsInHall(0, 5)).to.contain('Unsuccessful');
            expect(cinema.swapSeatsInHall(5, 0)).to.contain('Unsuccessful');
        });

        it('Returns Unsuccessful if input is greater than 20', () => {
            expect(cinema.swapSeatsInHall(4, 22)).to.contain('Unsuccessful');
            expect(cinema.swapSeatsInHall(22, 4)).to.contain('Unsuccessful');
        });

        it('Returns Unsuccessful if input numbers are equal', () => {
            expect(cinema.swapSeatsInHall(4, 4)).to.contain('Unsuccessful');
        });

        it('Works as expected with correct input', () => {
            expect(cinema.swapSeatsInHall(5, 6)).to.contain('Successful');
            expect(cinema.swapSeatsInHall(5, 20)).to.contain('Successful');
            expect(cinema.swapSeatsInHall(20, 5)).to.contain('Successful');
        });

        it('Returns Unsuccessful with mixed input errors', () => {
            expect(cinema.swapSeatsInHall(4.5, -4)).to.contain('Unsuccessful');
            expect(cinema.swapSeatsInHall(-4, 4.5)).to.contain('Unsuccessful');
            expect(cinema.swapSeatsInHall(0, 4.5)).to.contain('Unsuccessful');
            expect(cinema.swapSeatsInHall(4.5, 0)).to.contain('Unsuccessful');
            expect(cinema.swapSeatsInHall(25, 0)).to.contain('Unsuccessful');
            expect(cinema.swapSeatsInHall(0, 25)).to.contain('Unsuccessful');
        });

        it('Returns Unsuccessful if input is string', () => {
            expect(cinema.swapSeatsInHall('4', 4)).to.contain('Unsuccessful');
            expect(cinema.swapSeatsInHall(4, '4')).to.contain('Unsuccessful');
            expect(cinema.swapSeatsInHall(null, 4)).to.contain('Unsuccessful');
            expect(cinema.swapSeatsInHall(4, null)).to.contain('Unsuccessful');
        });

    });
});