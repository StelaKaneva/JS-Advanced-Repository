let { expect } = require ('chai');
let mathEnforcer = require ('../04.MathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('Should return undefiened when parameter is not a number', () => {
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
            expect(mathEnforcer.addFive('20')).to.equal(undefined);
        });

        it('Should return number plus 5 when parameter is valid number', () => {
            expect(mathEnforcer.addFive(10)).to.equal(15);
            expect(mathEnforcer.addFive(1.1 + 2.2)).to.closeTo(8.3, 0.01);
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        });
    });

    describe('subtractTen', () => {
        it('Should return undefiened when parameter is not a number', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
            expect(mathEnforcer.subtractTen('20')).to.equal(undefined);
        });

        it('Should return number plus minus 10 when parameter is valid number', () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
            expect(mathEnforcer.subtractTen(0.1 + 20.2)).to.closeTo(10.3, 0.01);
            expect(mathEnforcer.subtractTen(-30)).to.equal(-40);
        });
    });

    describe('sum', () => {
        it('Should return undefiened when first parameter is not a number', () => {
            expect(mathEnforcer.sum(undefined, 1)).to.equal(undefined);
            expect(mathEnforcer.sum(null, 5)).to.equal(undefined);
            expect(mathEnforcer.sum('20', 8)).to.equal(undefined);
        });

        it('Should return undefiened when second parameter is not a number', () => {
            expect(mathEnforcer.sum(1, undefined)).to.equal(undefined);
            expect(mathEnforcer.sum(5, null)).to.equal(undefined);
            expect(mathEnforcer.sum(8, '20')).to.equal(undefined);
        });

        it('Should return sum of both numbers when both parameters are valid numbers', () => {
            expect(mathEnforcer.sum(20, 10)).to.equal(30);
            expect(mathEnforcer.sum(0.1, 20.2)).to.closeTo(20.3, 0.01);
            expect(mathEnforcer.sum(-30, -10)).to.equal(-40);
        });
    });
});