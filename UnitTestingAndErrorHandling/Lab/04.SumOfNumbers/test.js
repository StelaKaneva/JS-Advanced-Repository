const {expect} = require('chai');
const sum = require('./04.SumOfNumbers');

describe('Sum Checker', () => {
    it('throws error when input is not array', () =>{
        expect(function () { sum(5); }).to.throw();
    });

    it('returns 8 when [3, 2, 3] is passed', () =>{
        expect(sum([3, 2, 3])).to.be.equal(8);
    });

    it('returns 12 when [6, 6] is passed', () =>{
        expect(sum([6, 6])).to.be.equal(12);
    });
});